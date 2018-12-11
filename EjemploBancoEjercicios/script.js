/*let dataArray = [2, 3, 2, 3];

function suma(a, b) {
  return a + b;
}

function average(dataArray) {
  let dataAverage =  dataArray.reduce(suma, 0) / dataArray.length;
  return dataAverage;
}

console.log(average(dataArray));*/

class corredor {

  constructor(nombreCorredor, apellidoCorredor) {
    this.nombreCorredor = nombreCorredor;
    this.apellidoCorredor = apellidoCorredor;
    this.edad = undefined;
    this.club = undefined;
    this.categoría = undefined;
    this.marca = new Array();
  }

  addMarca(marca) {
    this.marca.push(marca);
  }

  getLowerMarca() {
    for (let i = 0; i < this.marca.length; i++) {
      let lowerMarca = 0;
      if (lowerMarca > this.marca[i]) {
        lowerMarca = this.marca[i];
      }

      return lowerMarca;
    }
  }

  getHigherMarca() {
    for (let i = 0; i < this.marca.length; i++) {
      let lowerMarca = 0;
      if (lowerMarca < this.marca[i]) {
        lowerMarca = this.marca[i];
      }

      return lowerMarca;
    }
  }

  isUnderAge() {
    return this.edad < 18;
  }
}
