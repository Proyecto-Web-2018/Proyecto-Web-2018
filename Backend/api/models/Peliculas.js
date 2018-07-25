/**
 * Peliculas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    anioLanzamiento: {
      type: 'string',
      required: true
    },
    rating: {
      type: 'number',
      required: true
    },
    sinopsis: {
      type: 'string',
      required: true
    },
    imagen: {
      type: 'string',
      required: true
    },
    link: {
      type: 'string',
      required: true
    },
    duracion: {
      type: 'string',
      required: true
    },

    listaReproduccion:{
      collection: 'ListaReproduccionPeliculas',
      via: 'peliculas'
    },

    actores:{
      collection: 'Actor',
      via:'peliculas'
    },

    generos:{
      collection: 'Genero',
      via: 'peliculas'
    }



  },

};

