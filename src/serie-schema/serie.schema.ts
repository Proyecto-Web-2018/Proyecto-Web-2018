import * as Joi from 'joi';

export const SERIE_SCHEMA = Joi
  .object()
  .keys({
    idSerie: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    tituloSerie: Joi
      .string()
      .min(1)
      .required(),
  });