//****PARTE 1*****

//Funcion para recoger el numero de piezas con el que quiere jugar el usuario.
function getNumberPiecesFromUser() {
  //Iniciamos la variable que condiciona si pedimos al usuario el numero de piezas o no de nuevo.
  let condition = true;

  /*Iniciamos la variable que queremos devolver,
  con el fin de evitar  el error por no haberla definido.*/
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
let numPieces = getNumberPiecesFromUser();
console.log(getMaxScore(numPieces));

console.log(getScore());

updateScore(90);

decreaseScore(5);
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

/*Esta funcion recoge 2 parametros, primero la pieza que estamos buscando
y segundo el total de piezas del puzzle.
Devolviendote la posicion de la pieza por columna y fila.*/
function pieceNumberToRowsColumns(numberPiece, totalNumberPieces) {

  //Calculamos lo larga que es cada fila.
  let row = Math.sqrt(totalNumberPieces);

  //let col = Math.sqrt(totalNumberPieces);

  //Establecemos la posicion inicial antes de usar el algoritmo.
  let colPosition = 1;
  let rowPosition = numberPiece;

  //Algoritmo que convierte el numero recogido en las posiciones.
  if (numberPiece > row) {
    for (let i = numberPiece; i > row; i = i - row) {
      colPosition = colPosition + 1;
      rowPosition = rowPosition - row;
    }
  }

  return [colPosition, rowPosition];

}

function createPuzzleLayout(totalNumberPieces, widthPuzzle, heightPuzzle, imgDirection) {
  //let table = '<table>';
  let table = '';
  let pieceNumber = 0;

  //Calculamos lo larga que es cada columna.
  let col = Math.sqrt(totalNumberPieces);

  //Calculamos lo larga que es cada fila.
  let row = Math.sqrt(totalNumberPieces);

  for (let i = 0; i <= col - 1; i++) {
  	table = table + "<tr>";
  	for (let i = 0; i <= row - 1; i++) {
  		table = table + "<td id='piece" + pieceNumber + "' style='border: 3px solid black'>";
  		table = table + '<img src="cat.jpg">'
  		table = table + '</td>';
  		pieceNumber++;
  	}
  	table = table + '</tr>';
  }
  //table = table + '</table>';

  console.log(table);
  document.getElementsByTagName('body').innerHTML = table;
  // crea un nuevo table 
  // y añade contenido 
  let newTable = document.createElement("table"); 
  let newContent = document.createTextNode(table); 
  newTable.appendChild(newContent); //añade las celdas al table creado. 

  // añade el elemento creado y su contenido al DOM 
  let current = document.getElementById("div_solution"); 
  document.body.insertBefore(newTable, current);
}

createPuzzleLayout(9, 200, 200, 'left');