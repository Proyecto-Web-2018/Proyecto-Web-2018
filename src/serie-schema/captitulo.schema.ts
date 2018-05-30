import * as Joi from 'joi';

export const CAPITULO_SCHEMA = Joi
  .object()
  .keys({
    idCapitulo: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    tituloCapitulo: Joi
      .string()
      .min(1)
      .required(),
    duracionCapitulo: Joi
      .string()
      .alphanum()
      .numeric,
    linkCapitulo: Joi
      .string()
      .required(),
  });