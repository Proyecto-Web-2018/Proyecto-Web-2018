import * as Joi from 'joi';

export const ACTOR_SCHEMA = Joi
  .object()
  .keys({
    idActor: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    nombreActor: Joi
      .string()
      .min(1)
      .required(),
    descripcionActor: Joi
      .string()
      .min(1)
      .alphanum(),
  });