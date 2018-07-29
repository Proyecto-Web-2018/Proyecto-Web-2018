/**
 * ListaPeliculas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string'
    },

    usuario: {
      model: 'Usuario'
    },

    peliculas:{
      collection: 'Peliculas',
      via: 'listaReproduccion'
    }

  },

};

