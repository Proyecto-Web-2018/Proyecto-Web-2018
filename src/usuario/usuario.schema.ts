import * as Joi from 'joi';

export const USUARIO_SCHEMA = Joi
  .object()
  .keys({
    idUsuario: Joi
      .number()
      .integer()
      .greater(0)
      .required(),
    nombre: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    password: Joi
      .string()
      .alphanum()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    correo: Joi
      .string().email(),
  });