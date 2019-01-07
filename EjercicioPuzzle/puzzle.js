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
  let table = '<table>';
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
  let pieces = [];
  for (let i = 0; i < totalNumberPieces; i++) {
    pieces[i] = pieceToOffset(i, widthPuzzle, heightPuzzle, totalNumberPieces);
  }

  return pieces;
}

function drawContentPuzzle(displacementArray) {

}

console.log(pieceNumberToRowsColumns(1, 9));
createPuzzleLayout(9, 300, 300, 'cat.jpg');
console.log(pieceToOffset(0, 300, 300, 9));
console.log(createReferenceSolution(300, 300, 9));
