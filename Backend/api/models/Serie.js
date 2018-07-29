/**
 * Serie.js
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

    generos: {
      collection: 'Genero',
      via: 'series'
    },

    temporadas: {
      collection: 'Temporada',
      via: 'serie'
    },

    listaSeries:{
      collection: 'ListaSeries',
        via: 'series'
    }

  },

};

