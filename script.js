const readline = require('readline-sync');

//Definicion de clases

class ArticulosCientificos {

  constructor(titulo, autor, numPag, anyoPublicacion, numMenciones) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
    this.anyoPublicacion = anyoPublicacion;
    this.numMenciones = numMenciones;
  }
}

class ArticulosRevista extends ArticulosCientificos {

  constructor(titulo, autor, numPag, anyoPublicacion, numMenciones,
              tituloRevista, editorialAsociada, factorImpacto) {
    super(titulo, autor, numPag, anyoPublicacion, numMenciones);
    this.tituloRevista = tituloRevista;
    this.editorialAsociada = editorialAsociada;
    this.factorImpacto = factorImpacto;
  }
}

class articulosConferencia extends ArticulosCientificos {

  constructor(titulo, autor, numPag, anyoPublicacion, numMenciones,
              libroConferencia, nombre, lugarCelebracion) {
    super(titulo, autor, numPag, anyoPublicacion, numMenciones);
    this.libroConferencia = libroConferencia;
    this.nombre = nombre;
    this.lugarCelebracion = lugarCelebracion;
  }
}

class patentesCientificas {

  constructor(autor, anyoPublicacion, anyoVencimiento) {
    this.autor = autor;
    this.anyoPublicacion = anyoPublicacion;
    this.anyoVencimiento = anyoVencimiento;
  }
}

//**********************************************************
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
      publications.push(ArticulosConferencia);
    } else if (tipo === 3) {
      let titulo = readline.question('Introduce el titulo: ');
      let autores = readline.question('Introduce el autor: ');
      let anyoPublicacion = readline.questionInt('Introduce el año de publicacion: ');
      let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento: ');
      let patentesCientificas = new PatentesCientificas(autores, anyoPublicacion, anyoVencimiento);
      publications.push(patentesCientificas);
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
          if (tituloRevista === '') tituloRevista = publicaciones[i].gettituloRevista;

          let editorialAsociada = readline.question('Introduce nombre de la editorial o pulsa enter: ');
          if (editorialAsociada === '') editorialAsociada = publicaciones[i].geteditorialAsociada;

          let factorImpacto = readline.questionInt('Introduce factor de impacto o 0: ');
          if (factorImpacto === 0) factorImpacto = publicaciones[i].getfactorImpacto;

          let autor = publicaciones[i].getautor;

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

          let conferenceBookTitle = readline.question('Introduce el titulo del libro de la publicacion o pulsa enter: ');
          if (conferenceBookTitle === '') conferenceBookTitle = publicaciones[i].getConferenceBookTitle;

          let conferenceName = readline.question('Introduce el nombre de la confeerencia o pulsa enter: ');
          if (conferenceName === 0) conferenceName = publicaciones[i].getConferenceName;

          let conferencePlace = readline.question('Introduce el lugar de celebracion la conferencia o pulsa enter: ');
          if (conferencePlace === 0) conferencePlace = publicaciones[i].getConferencePlace;

          let autor = publicaciones[i].getautor;

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
      if (publicacion.title === titulo && publicacion.Conferencia === true) {
        console.log('Introduce los datos que quieras modificar y deja en blanco el resto o 0 en los campos numericos');
        let titulo = readline.question('Introduce el titulo o pulsa enter: ');
        if (titulo === '') titulo = publicaciones[i].getTitulo;

        let anyoPublicacion = readline.questionInt('Introduce el año de publicacion o 0: ');
        if (anyoPublicacion === 0) anyoPublicacion = publicaciones[i].getAnyoPublicacion;

        let anyoVencimiento = readline.questionInt('Introduce el año de vencimiento o 0: ');
        if (anyoVencimiento === 0) anyoVencimiento = publicaciones[i].getAnyoVencimiento;

        let autor = publicaciones[i].getAutor;

        publicaciones.splice(i);

        let scientificPatent = new ScientificPatent(titulo, autor, anyoPublicacion, anyoVencimiento);
        publicaciones.push(scientificPatent);

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
