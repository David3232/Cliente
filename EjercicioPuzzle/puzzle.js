//****PARTE 1*****

//Funcion para recoger el numero de piezas con el que quiere jugar el usuario.
function getNumberPiecesFromUser() {
  //Iniciamos la variable que condiciona si pedimos al usuario el numero de piezas o no de nuevo.
  let condition = true;

  /*
   *  Iniciamos la variable que queremos devolver,
   *  con el fin de evitar  el error por no haberla definido.
   */
  let puzzlePieces = 0;

  //Pedimos el numero de piezas hasta que se nos demuestre que es valido.
  while (condition) {
    puzzlePieces = prompt('Con cuantas piezas quieras jugar al puzzle?');

    //Comprobar si la raiz cuadrada de puzzlePieces es exacta.
    if (!Number.isInteger(Math.sqrt(puzzlePieces))) {
      window.alert('El numero introducido es incorrecto');
    } else if (puzzlePieces <= 0) {
      window.alert('El numero introducido no es entero');
    } else {
      condition = false;
    }

  }

  return puzzlePieces;
}

//****PARTE 2*****

//Calculamos la maxima puntuacion que puede alcanzar.
function getMaxScore(puzzlePieces) {
  return puzzlePieces * 2;
}

//Obtenemos el score del usuario.
function getScore() {
  let scoreString = document.getElementById('score').textContent.substring(6);
  let scoreInt = parseInt(scoreString);
  return scoreInt;
}

//Cambiamos el score.
function updateScore(newScore) {
  // Recogemos el texto del html.
  let scoreFullString = document.getElementById('score').textContent;
  let scoreSplit = scoreFullString.split(':');

  //Sustituimos los valores
  scoreSplit[1] = newScore;

  //Generamos el string con el valor cambiado.
  let finalString = scoreSplit[0] + ': ' + scoreSplit[1];

  //Introducimos el valor final en el html.
  document.getElementById('score').textContent = finalString;
}

function decreaseScore(number) {
  // Recogemos el texto del html.
  let scoreFullString = document.getElementById('score').textContent;
  let scoreSplit = scoreFullString.split(':');

  //Sustituimos los valores
  scoreSplit[1] = scoreSplit[1] - number;
  let finalString = scoreSplit[0] + ': ' + scoreSplit[1];

  //Introducimos el valor final en el html.
  document.getElementById('score').textContent = finalString;
}

/*
 *	Pruebas.
 *
 *  let numPieces = getNumberPiecesFromUser();
 *  console.log(getMaxScore(numPieces));
 *
 *  console.log(getScore());
 *
 *  updateScore(90);
 *
 *  decreaseScore(5);
*/

//****PARTE 3*****

//Redimensiona las imagenes con un maximo de 200 en alguna de las dos medidas.
function getNewSizes(width, height) {
  let maxSize = 200;

  //Maximo 200 de ancho
  if (width > height) {
    height = height * maxSize / width;
    width = maxSize;
    return [width, height];

    //Maximo 200 de ancho
  } else {
    width = width * maxSize / height;
    height = maxSize;
    return [width, height];
  }
}

//Funcion para barajar los objetos de una array de sus posiciones.
function shuffle(objectArray) {

  let quantity = objectArray.length;

  //Cambiamos de posicion los objetos, alamcenando temporalmente el objeto para cambiarlo de lugar.
  for (let k = quantity - 1; k >= 1; k--) {
    let az = Math.floor(Math.random() * k);
    tmp = objectArray[az];
    objectArray[az] = objectArray[k];
    objectArray[k] = tmp;
  }

  return objectArray;
}

/*
 *  Esta funcion recoge 2 parametros:
 *  La pieza que estamos buscando
 *  El total de piezas del puzzle.
 *
 *  Devolviendote la posicion de la pieza por columna y fila.
 */
function pieceNumberToRowsColumns(numberPiece, totalNumberPieces) {

  //Calculamos lo larga que es cada fila.
  let row = Math.sqrt(totalNumberPieces);

  //let col = Math.sqrt(totalNumberPieces);

  //Establecemos la posicion inicial antes de usar el algoritmo.
  let colPosition = 0;
  let rowPosition = numberPiece;

  //Algoritmo que convierte el numero recogido en las posiciones.
  if (numberPiece + 1 > row) {
    for (let i = numberPiece + 1; i > row; i = i - row) {
      colPosition = colPosition + 1;
      rowPosition = rowPosition - row;
    }
  }

  return [colPosition, rowPosition];
}

//****PARTE 4*****

/*
 *  Esta funcion recoge:
 *  Numero total de piezas
 *  El ancho
 *  El alto de las piezas
 *  La direccion de la imagen
 *
 *  Para crear una tabla como piezas.
*/
function createPuzzleLayout(totalNumberPieces, widthPuzzle, heightPuzzle, imgDirection) {

  //Iniciamos la tabla que queremos añadir a nuestro html y el numero de pieza.
  let table = '<table id="puzzleTable">';
  let pieceNumber = 0;

  //Calculamos lo larga que es cada columna.
  let col = Math.sqrt(totalNumberPieces);

  //Calculamos lo larga que es cada fila.
  let row = Math.sqrt(totalNumberPieces);

  //Itineramos a traves de la longitud de nuestras columnas añadiendo un tr para crearlas.
  for (let i = 0; i <= col - 1; i++) {
    table = table + '<tr>';

    /*
     * Itineramos a traves de la longitud de nuestras filas
     * para añadirles el td y la imagen de fondo correspondiente.
     *  Ademas de contar el numero de piezas que llevamos-
     */
    for (let i = 0; i <= row - 1; i++) {
      table = table + "<td id='piece" + pieceNumber + "' style='height:" + heightPuzzle / row + "px; width:" + widthPuzzle/col + "px; background-image: url(" + '"' + imgDirection + '"' + "); border: 3px solid black'>";
      table = table + '</td>';
      pieceNumber++;
    }

    //Cerramos la columna.
    table = table + '</tr>';
  }

  //Cerramos la tabla.
  table = table + '</table>';

  //Añadimos antes de el div_solution nuestra tabla.
  let current = document.getElementById('div_solution');
  current.insertAdjacentHTML('beforebegin', table);
}

/*
 *  Esta funcion recoge:
 *  el numero de la pieza a calcular el desplazamiento
 *  la anchura
 *  la altura
 *  el numero total de piezas
 *
 *  Nos devuelve el desplazamiento de dicha pieza.
 */
function pieceToOffset(pieceNumber, widthPuzzle, heightPuzzle, totalNumberPieces) {

  //Calculamos el ancho y alto de las piezas
  let widthPiece = widthPuzzle / Math.sqrt(totalNumberPieces);
  let heightPiece = heightPuzzle / Math.sqrt(totalNumberPieces);

  //Calculamos la posicion de la pieza en el puzzle.
  let position = pieceNumberToRowsColumns(pieceNumber, totalNumberPieces);

  // Inicializamos una array 'displacement' para almacenar el desplazamiento en dos coordenadas.
  let displacement = [];
  let x = position[0] * widthPiece * -1;
  let y = position[1] * heightPiece * -1;
  displacement = [x, y];

  //Devolvemos el desplazamiento de la pieza.
  return displacement;
}

/*
 *  Esta funcion recoge:
 *  la anchura
 *  la altura
 *  el numero total de piezas
 *
 *  Nos devuelve un array con el desplazamiento de las piezas.
 */
function createReferenceSolution(widthPuzzle, heightPuzzle, totalNumberPieces) {

  //Inicializamos el array donde vamos a contener el desplazamiento de cada pieza.
  let pieces = [];

  //Añadimos a nuestro array cada pieza asociada a su posicion.
  for (let i = 0; i < totalNumberPieces; i++) {
    pieces[i] = pieceToOffset(i, widthPuzzle, heightPuzzle, totalNumberPieces);
  }

  return pieces;
}

/*
 *  Esta funcion recoge:
 *  array de desplazamientos
 *
 *  La función cambiará el fondo de cada una de las celdas de la tabla con el desplazamiento indicado.
 */
function drawContentPuzzle(displacementArray) {
  //Iniciamos la posicion que vamos a desplazar.
  let position = 0;

  //Recorremos la longitud de columnas que hay, para poder modificar cada celda de la columna.
  for (let x = 0; x < document.getElementById('puzzleTable').rows.length; x++) {
    //Recorremos cada celda para cambiar el posicionamiento.
    for (let i = 0; i < document.getElementById('puzzleTable').rows[x].cells.length; i++) {

      //Convertimos nuestro array con el desplazamiento a algo usable por css.
      let displacementToSplit = displacementArray[position].toString();
      let displacementSplited = displacementToSplit.split(',');
      let displacementInPixels = displacementSplited[1] + 'px ' + displacementSplited[0] + 'px';

      //Guardamos una variable con cada celda, y le añadimos el desplazamiento.
      let cell = document.getElementById('puzzleTable').rows[x].cells[i];
      cell.style.backgroundPosition = displacementInPixels;

      //Por ultimo, cambiamos la posicion.
      position++;
    }
  }
}

/*
 *  console.log(pieceNumberToRowsColumns(1, 9));
 *  console.log(pieceToOffset(0, 300, 300, 9));
 *  console.log(createReferenceSolution(300, 300, 9));
 */

//****PARTE 5*****

/*
 *  Esta funcion recoge:
 *  la solución del puzzle y el estado actual
 *
 *  La función devolverá si el puzzle está terminado
 */
function checkIfSolution(puzzleSolution, currentState) {
  //Iniciamos la variable que determina si el puzzle se a terminado o no.
  let isFinished = true;

  /*
   *  Ahora recorremos lar arrays, y si alguna posicion es incorrecta
   *  cambiamos la variable para devolver que el puzzle no esta resuelto.
   */
  for (let i = 0; i < puzzleSolution.length; i++) {
    if (puzzleSolution[i] !== currentState[i]) {
      isFinished = false;
    }
  }

  //Devolvemos si el puzzle esta terminado.
  return isFinished;
}

/*
 *  Esta funcion recoge:
 *  la URL de una imagen
 *  el número de piezas del puzzle
 *
 *  Esta función carga dinámicamente una imagen en JavaScript a partir de una URL.
 *  Cuando la imagen está cargada en el objeto, se dispara un evento que ejecuta la lógica del juego.
 */
function initGame(imgURL, totalNumberPieces) {

  //Inicializamos una variable para contener una imagen.
  let img = new Image();

  //Cuando esta, cargue, se ejecute dicha funcion.
  img.addEventListener('load', function () {
    gameLogic(img, totalNumberPieces);
  });

  //Se añade el scr a la imagen.
  img.src = imgURL;

}

/*
 *
 */
function f(event) {
  if (selectedPïece == undefined) {
    selectedPïece = event.curretTarget;
    selectedPïece.style.borderColor = 'red';
  } else if (event.curretTarget == selectedPïece) {
    selectedPïece = undefined;
  } else {
    let temporalPiece = event.curretTarget;
    let temporalPieceBgPosition = temporalPiece.style.backgroundPosition;
    temporalPiece.style.backgroundPosition = selectedPïece.style.backgroundPosition;
    selectedPïece.style.backgroundPosition = temporalPieceBgPosition;
    selectedPïece.style.borderColor = 'black';
    decreaseScore(1);

    checkIfSolution();
  }
}

/*
 *  Esta funcion recoge:
 *  un objeto de tipo Image
 * 	el número de piezas del puzzle
 *
 *  La función inicializará los elementos HTML del juego, creando un punto de inicio aleatorio.
 *
 */
function gameLogic(image, totalNumberPieces) {

  //Guardamos la puntuacion maxima que se puede conseguir.
  let score = getMaxScore(totalNumberPieces);

  //Actualizamos el score en el html
  updateScore(puntuacion);

  //Obtenemos el score del usuario.
  let scoreborad = getScore();

  //Obtenemos la solucion.
  let solution = createReferenceSolution();

  element.addEventListener('click', f);

}

//checkIfSolution([1, 2, 3], [1, 3, 3]);
let selectedPïece = undefined;
let solution = undefined;
let puzzleMezclado = undefined;
createPuzzleLayout(9, 900, 900, 'cat.jpg');
drawContentPuzzle(createReferenceSolution(900, 900, 9));
