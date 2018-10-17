const readline = require('readline-sync');

//Definicion de clases

class Publicaciones{

  constructor(Titulo, Autor) {
    this.Titulo = Titulo;
    this.Autor = Autor;
  }

  getTitulo() {
    return this.Titulo;
  }

  setTitulo(Titulo) {
    this.Titulo = Titulo;
  }

  getAutor() {
    return this.Autor;
  }

  setAutor(Autor) {
    this.Autor = Autor;
  }
}

class ArticulosCientificos {

  constructor(titulo, autor, numPag, anyoPublicacion, numMenciones) {
    this.Titulo = titulo;
    this.Autor = autor;
    this.NumPag = numPag;
    this.AnyoPublicacion = anyoPublicacion;
    this.NumMenciones = numMenciones;
  }

  getNumPag() {
    return this.NumPag;
  }

  setNumPag(NumPag) {
    this.NumPag = NumPag;
  }

  getAnyoPublicacion() {
    return this.AnyoPublicacion;
  }

  setAnyoPublicacion(AnyoPublicacion) {
    this.AnyoPublicacion = AnyoPublicacion;
  }

  getNumMenciones() {
    return this.NumMenciones;
  }

  setNumMenciones(NumMenciones) {
    this.NumMenciones = NumMenciones;
  }

  isArticulo() {
    return this._Articulo;
  }
}

class ArticulosRevista extends ArticulosCientificos {

  constructor(titulo, autor, numPag, anyoPublicacion, numMenciones,
              tituloRevista, editorialAsociada, factorImpacto) {
    super(titulo, autor, numPag, anyoPublicacion, numMenciones);
    this.TituloRevista = tituloRevista;
    this.EditorialAsociada = editorialAsociada;
    this.FactorImpacto = factorImpacto;
  }

  getTituloRevista() {
    return this.TituloRevista;
  }

  setTituloRevista(TituloRevista) {
    this.TituloRevista = TituloRevista;
  }

  getEditorialAsociada() {
    return this.EditorialAsociada;
  }

  setEditorialAsociada(EditorialAsociada) {
    this.EditorialAsociada = EditorialAsociada;
  }

  getFactorImpacto() {
    return this.FactorImpacto;
  }

  setFactorImpacto(FactorImpacto) {
    this.FactorImpacto = FactorImpacto;
  }

  isRevista() {
    return this._Revista;
  }
}

class ArticulosConferencia extends ArticulosCientificos {

  constructor(titulo, autor, numPag, anyoPublicacion, numMenciones,
              libroConferencia, nombre, lugarCelebracion) {
    super(titulo, autor, numPag, anyoPublicacion, numMenciones);
    this.LibroConferencia = libroConferencia;
    this.Nombre = nombre;
    this.LugarCelebracion = lugarCelebracion;
  }

  getLibroConferencia() {
    return this.LibroConferencia;
  }

  setLibroConferencia(LibroConferencia) {
    this.LibroConferencia = LibroConferencia;
  }

  getNombre() {
    return this.Nombre;
  }

  setNombre(Nombre) {
    this.Nombre = Nombre;
  }

  getLugarCelebracion() {
    return this.LugarCelebracion;
  }

  setLugarCelebracion(LugarCelebracion) {
    this.LugarCelebracion = LugarCelebracion;
  }

  isConferencia() {
    return this._Conferencia;
  }
}

class patentesCientificas {

  constructor(autor, anyoPublicacion, anyoVencimiento) {
    this.Autor = autor;
    this.AnyoPublicacion = anyoPublicacion;
    this.AnyoVencimiento = anyoVencimiento;
  }

  getAnyoPublicacion() {
    return this.AnyoPublicacion;
  }

  setAnyoPublicacion(AnyoPublicacion) {
    this.AnyoPublicacion = AnyoPublicacion;
  }

  getAnyoVencimiento() {
    return this.AnyoVencimiento;
  }

  setAnyoVencimiento(AnyoVencimiento) {
    this.AnyoVencimiento = AnyoVencimiento;
  }

  isPatente() {
    return this._Patente;
  }
}

//Menu
console.log('Hola');
let publicaciones = [];
let salir = false;
while (!salir) {
  console.log('Bienvenidos al sistema de gestion de articulos cientificos');
  console.log('1) Dar de alta una publicacion');
  console.log('2) Dar de baja una publicacion');
  console.log('3) Modificar autores');
  console.log('4) Modificar articulos cientificos');
  console.log('5) Modificar patentes cientificas');
  console.log('-1) Salir del sistema');
  let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');
  if (opcion === 1) {
    //Dar de alta una publicacion
    console.log('Selecciona un tipo.');
    console.log('1) Articulo de revista');
    console.log('2) Articulo de conferencia');
    console.log('3) Patente cientifica');
    console.log('-1) Salir del sistema');
    let tipo = readline.questionInt('Por favor, seleccione una de estas opciones: ');
    if (tipo === 1) {
      let titulo = readline.question('Introduce el titulo: ');
      let autor = readline.question('Introduce el autor: ');
      let numPags = readline.questionInt('Introduce el numero de paginas: ');
      let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
      let numMenciones = readline.questionInt('Introduce el numero de menciones: ');
      let tituloRevista = readline.question('Introduce el titulo de la revista: ');
      let editorialAsociada = readline.question('Introduce el nombre de la editorial: ');
      let factorImpacto = readline.questionInt('Introduce el factor de impacto: ');
      let articulosRevista = new ArticulosRevista(titulo, autor, numPags, anyoPublicacion,
                                                  numMenciones, tituloRevista, editorialAsociada,
                                                  factorImpacto);
      publicaciones.push(ArticulosRevista);
    } else if (tipo === 2) {
      let titulo = readline.question('Introduce el titulo: ');
      let autor = readline.question('Introduce el autor: ');
      let numPags = readline.questionInt('Introduce el numero de paginas: ');
      let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
      let numMenciones = readline.questionInt('Introduce el numero de menciones: ');
      let libroConferencia = readline.question('Introduce el titulo del libro de la publicacion: ');
      let nombre = readline.question('Introduce el nombre de la conferencia: ');
      let lugarCelebracion = readline.question('Introduce el lugar de celebracion la conferencia: ');
      let articulosConferencia = new ArticulosConferencia(titulo, autores, numPag,
                                                          anyoPublicacion, numMenciones,
                                                          libroConferencia, nombre, lugarCelebracion);
      publicaciones.push(ArticulosConferencia);
    } else if (tipo === 3) {
      let titulo = readline.question('Introduce el titulo: ');
      let autores = readline.question('Introduce el autor: ');
      let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
      let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento: ');
      let patentesCientificas = new PatentesCientificas(autores, anyoPublicacion, anyoVencimiento);
      publicaciones.push(patentesCientificas);
    } else if (tipo === -1) {
      salir = true;
    }

  } else if (opcion === 2) {
    //Dar de baja una publicacion
    let titulo = readline.question('Por favor, introduce un titulo: ');
    let encontrado = false;
    for (let i = 0; i < publicaciones.length; i++) {
      let publicacion = publicaciones[i];
      if (publicacion.titulo === titulo) {
        publicaciones.splice(i, 1);
        encontrado = true;
        break;
      }
    }

    if (encontrado) {
      console.log('Publicacion encontrada y borrada del sistema');
    } else {
      console.log('Publicacion no encontrada en el sistema');
    }
  } else if (opcion === 3) {
    //Modificar autores
    let titulo = readline.question('Por favor, introduce un titulo: ');
    let encontrado = false;
    for (let i = 0; i < publicaciones.length; i++) {
      let publication = publicaciones[i];
      if (publication.titulo === titulo) {
        let autor = readline.question('Por favor, introduce un autor: ');
        publicaciones[i].autor = autor;
        encontrado = true;
        console.log(publicaciones[i]);
        break;
      }
    }

    if (encontrado) {
      console.log('Publicacion encontrada y autor modificado');
      console.log(publicaciones);
    } else {
      console.log('Publicacion no encontrada en el sistema');
    }
  } else if (opcion === 4) {
    //Modificar articulos cientificos
    let nuevoTipo = readline.question('Por favor, introduce el tipo:\n' +
        '1) Articulo de revista\n' +
        '2) Articulo de conferencia\n' +
        'Tipo: ');
    let encontrado = false;
    let titulo = readline.question('Por favor, introduce un titulo: ');

    if (nuevoTipo === 1) {
      for (let i = 0; i < publicaciones.length; i++) {
        let publicacion = publicaciones[i];
        if (publicacion.titulo === titulo && publicacion.isReview === true) {
          console.log('Introduce los datos que quieras modificar y los que no dejalos en blanco o 0 en los campos numericos');
          let titulo = readline.question('Introduce el titulo o pulsa enter: ');
          if (titulo === '') titulo = publicaciones[i].getTitulo;

          let numPags = readline.questionInt('Introduce numero de paginas o 0: ');
          if (numPags === 0) numPags = publicaciones[i].getNumPags;

          let anyoPublicacion = readline.questionInt('Introduce año de publicacion o 0: ');
          if (anyoPublicacion === 0) anyoPublicacion = publicaciones[i].getAnyoPublicacion;

          let numMenciones = readline.questionInt('Introduce numero de menciones o 0: ');
          if (numMenciones === 0) numMenciones = publicaciones[i].getNumMenciones;

          let tituloRevista = readline.question('Introduce titulo de la revista o pulsa enter: ');
          if (tituloRevista === '') tituloRevista = publicaciones[i].getTituloRevista;

          let editorialAsociada = readline.question('Introduce nombre de la editorial o pulsa enter: ');
          if (editorialAsociada === '') editorialAsociada = publicaciones[i].getEditorialAsociada;

          let factorImpacto = readline.questionInt('Introduce factor de impacto o 0: ');
          if (factorImpacto === 0) factorImpacto = publicaciones[i].getFactorImpacto;

          let autor = publicaciones[i].getAutor;

          publicaciones.splice(i);

          let articulosRevista = new ArticulosRevista(titulo, autor, numPags, anyoPublicacion,
                                                      numMenciones, tituloRevista,
                                                      editorialAsociada, factorImpacto);

          publicaciones.push(ArticulosRevista);

          encontrado = true;

          break;
        }
      }

      console.log(publicaciones[publicaciones.length - 1]);
    } else if (nuevoTipo === 2) {
      for (let i = 0; i < publicaciones.length; i++) {
        let publicacion = publicaciones[i];
        if (publicacion.titulo === titulo && publicacion.Conferencia === true) {
          onsole.log('Introduce los datos que quieras modificar y los que no dejalos en blanco o 0 en los campos numericos');
          let titulo = readline.question('Introduce el titulo o pulsa enter: ');
          if (titulo === '') titulo = publicaciones[i].getTitulo;

          let numPags = readline.questionInt('Introduce el numero de paginas o 0: ');
          if (numPags === 0) numPags = publicaciones[i].getNumPags;

          let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
          if (anyoPublicacion === 0) anyoPublicacion = publicaciones[i].getAnyoPublicacion;

          let numMenciones = readline.questionInt('Introduce el numero de menciones o 0: ');
          if (numMenciones === 0) numMenciones = publicaciones[i].getNumMenciones;

          let libroConferencia = readline.question('Introduce el titulo del libro de la publicacion o pulsa enter: ');
          if (libroConferencia === '') libroConferencia = publicaciones[i].getLibroConferencia;

          let nombre = readline.question('Introduce el nombre de la conferencia o pulsa enter: ');
          if (nombre === 0) nombre = publicaciones[i].getNombre;

          let lugarCelebracion = readline.question('Introduce el lugar de celebracion la conferencia o pulsa enter: ');
          if (lugarCelebracion === 0) lugarCelebracion = publicaciones[i].getLugarCelebracion;

          let autor = publicaciones[i].getAutor;

          publicaciones.splice(i);
          let patentesCientificas = new PatentesCientificas(titulo, autor, numPag, anyoPublicacion,
                                                            numMenciones, libroConferencia, nombre,
                                                            lugarCelebracion);
          publicaciones.push(patentesCientificas);

          encontrado = true;

          break;
        }
      }

      console.log(publicaciones[publicaciones.length - 1]);
    }

    if (encontrado) {
      console.log('Publicacion encontrada y modificada');
      console.log(publicaciones);
    } else {
      console.log('Publicacion no encontrada en el sistema');
    }
  } else if (opcion === 5) {
    //Modificar patentes cientificas
    let encontrado = false;
    for (let i = 0; i < publicaciones.length; i++) {
      let publicacion = publicaciones[i];
      if (publicacion.Titulo === titulo && publicacion.Conferencia === true) {
        console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
        let titulo = readline.question('Introduce el titulo o pulsa enter: ');
        if (titulo === '') titulo = publicaciones[i].getTitulo;

        let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
        if (anyoPublicacion === 0) anyoPublicacion = publicaciones[i].getAnyoPublicacion;

        let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento o 0: ');
        if (anyoVencimiento === 0) anyoVencimiento = publicaciones[i].getAnyoVencimiento;

        let autor = publicaciones[i].getAutor;

        publicaciones.splice(i);

        let PatentesCientificas = new PatentesCientificas(titulo, autor, anyoPublicacion, anyoVencimiento);
        publicaciones.push(PatentesCientificas);

        encontrado = true;

        break;
      }
    }

    console.log(publicaciones[publicaciones.length - 1]);

    if (encontrado) {
      console.log('Publicacion encontrada y modificada');
      console.log(publicaciones);
    } else {
      console.log('Publicacion no encontrada en el sistema');
    }
  } else if (opcion === -1) {
    salir = true;
  }
}
