/**
 * Temporada.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    rating: {
      type: 'string',
      required: true
    },
    numeroCapitulos: {
      type: 'number',
      required: true
    },

    serie:{
      model:'Serie'
    },

    capitulos:{
      collection: 'Capitulo',
      via: 'temporada'
    }


  },

};

