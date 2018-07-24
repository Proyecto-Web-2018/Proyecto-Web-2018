import * as Joi from 'joi';

export const GENERO_SCHEMA = Joi
  .object()
  .keys({
    idGenero: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    nombreGenero: Joi
      .string()
      .min(1)
      .required(),
    descripcionGenero: Joi
      .string()
      .min(1)
      .alphanum(),
  });