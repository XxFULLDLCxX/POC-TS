import { errors } from '@/errors/errors';
import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

const body = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const messages = validation.error.details.reduce((message, detail) => message + detail.message + '\n ', '');
      // console.log(validation.error);
      throw errors.schema(messages);
    }
    
    next();
};

export const validate = {
  body,
};
