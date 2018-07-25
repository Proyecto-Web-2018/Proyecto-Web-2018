/**
 * Genero.js
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
    descripcion: {
      type: 'string'
    },

    peliculas:{
      collection: 'Peliculas',
      via: 'generos'
    },

    series:{
      collection: 'Serie',
      via: 'generos'
    }

  },

};

