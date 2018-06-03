import * as Joi from 'joi';

export const PELICULA_SCHEMA = Joi
  .object()
  .keys({
    idPelicula: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    tituloPelicula: Joi
      .string()
      .min(1)
      .required(),
    duracionPelicula: Joi
      .string()
      .alphanum()
      .numeric,
    linkPelicula: Joi
      .string()
      .required(),
  });