/* PON EL CODIGO DE LA CLASE A PARTIR DE AQUÍ */
class ReservationSlot {
  constructor(autor, reservedClass, reservationDate, startTime, duration, description) {
    this.autor = autor;
    this.reservedClass = reservedClass;
    this.reservationDate = reservationDate;
    function toDate(dateString, format) {
      let time = new Date();
      if (format == 'h:m') {
        time.setHours(dateString.substr(0, dateString.indexOf(':')));
        time.setMinutes(dateString.substr(dateString.indexOf(':') + 1));
        time.setSeconds(0);
        return time;
      }else
      throw Error('Invalid Format');
    }

    let init = startTime;
    let convertedStartTime = toDate(init, 'h:m');
    let minHour = new Date();
    minHour.setHours(8);
    let maxHour = new Date();
    maxHour.setHours(21);
    if (convertedStartTime > minHour.getHours() && maxHour.getHours() > convertedStartTime) {
      this.startTime = convertedStartTime;
    } else {
      throw Error('Error startTime is out of time.');
    }

    if (duration < 180 && 0 < duration) {
      this.duration = duration;
    } else {
      throw Error('Error duration is out of his allowed value.');
    }

    this.description = description;
  }

  getEndTime() {
    /*Primero recogemos la hora inicio*/
    let convertedDate = this.startTime;

    //Ahora sumamos horas dependiendo de el tiempo de duracion que nos hayan pasado.
    if (this.duration == 60) {
      moment(convertedDate).add(1, 'hours').format('HH:mm');
    } else if (this.duration == 120) {
      moment(convertedDate).add(2, 'hours').format('HH:mm');
    } else {
      moment(convertedDate).add(3, 'hours').format('HH:mm');
    }

    return convertedDate;
  }

  static overlaps(obj1, obj2) {
    //Traemos los startTime.
    let convertedDateObj1 = obj1.startTime;
    let convertedDateObj2 = obj2.startTime;

    if (convertedDateObj1 < convertedDateObj2) {
      if (obj1.getEndTime() > obj2.convertedStartTime) {
        return true;
      } else {
        return false;
      }

      //let first = convertedDateObj1;
      //let second = convertedDateObj2;
    } else if (convertedDateObj1 > convertedDateObj2) {
      if (obj2.getEndTime() > obj1.convertedStartTime) {
        return true;
      } else {
        return false;
      }

      //let first = convertedDateObj2;
      //let second = convertedDateObj1;
    } else if (convertedDateObj1 = convertedDateObj2) {
      return true;
    }
  }
}
/* FIN DEL CÓDIGO DE LA CLASE */

/* PON EL CÓDIGO DEL EJERCICIO 3 A PARTIR DE AQUÍ */
/*function getMostPopularUser(arrayObj) {
  for (let i = 0; i < arrayObj.length; i++) {
    arrayObj[i].autor
  }
}
*/
/* FIN DEL EJERCICIO 3 */

/* PON EL CÓDIGO DEL EJERCICIO 4 A PARTIR DE AQUÍ */


/* FIN DEL EJERCICIO 4 */
/*
if(typeof(module) !== 'undefined' && module.exports){
    exports.ReservationSlot = ReservationSlot;
    exports.getMostPopularUser = getMostPopularUser;
    exports.delayReservations = delayReservations;
    exports.getReservationsFromUser = getReservationsFromUser;
}

if (document.body.hasChildNodes()) {
*/
    /* PON AQUÍ EL CÓDIGO DEL EJERCICIO 5 */
    // Pon aquí el código para cambiar la tabla

    //Pon aquí tu código para cambiar el código del párrafo, de forma que muestre el usuario que más reservas ha realizado

    /* FIN DEL EJERCICIO 5 */
