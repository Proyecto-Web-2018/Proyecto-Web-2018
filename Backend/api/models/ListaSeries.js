/**
 * ListaSeries.js
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

    series:{
      collection: 'Serie',
      via: 'listaSeries'
    }

  },

};

