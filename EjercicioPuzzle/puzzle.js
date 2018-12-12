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

function pieceNumberToRowsColumns(numberPiece, totalNumberPieces) {
  Math.sqrt(totalNumberPieces);
  return [row, col];
}

/*
console.log(getNewSizes(1500, 1500));
let array = [9, 5, 4, 1];
console.log(shuffle(array));
*/
