import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class CapituloPipe implements PipeTransform{

  constructor(private readonly _schema){}

  transform(jsonAValidar: any, metadata: ArgumentMetadata){

    const{error} = Joi.validate(jsonAValidar, this._schema);

    if (!error) {
      return jsonAValidar;
    } else {
      throw new Error('Cpitulo no valido');

    }
  }

}