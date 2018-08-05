/**
 * Capitulo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo: {
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
    link: {
      type: 'string',
      required: true
    },
    duracion: {
      type: 'string',
      required: true
    },

    temporada:{
      model: 'Temporada'
    },

    actores:{
      collection: 'Actor',
      via: 'capitulos'
    }

  },

};

