/**
 * ControladorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  buscarPeliculaTodo: function (req, res) {

    Peliculas.find({ nombre : { contains : req.params.parametros } }).exec(function(err, data) {
      if (err) return next(err);
      res.json(data);
    });

  },


};

