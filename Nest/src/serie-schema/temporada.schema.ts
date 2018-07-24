import * as Joi from 'joi';

export const TEMPORADA_SCHEMA = Joi
  .object()
  .keys({
    idTemporada: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    numCapitulos: Joi
      .number()
      .integer()
      .greater(0),
  });