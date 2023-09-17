import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

export function errorHandler(error: any, _req: Request, res: Response, next: NextFunction) {
  console.log(error, typeof error, 'test');
  if (error.code === '23503' && error.constraint === 'genres_animeId_fkey') {
    return res.status(status.NOT_FOUND).send(error.detail);
  }
  if (error.code === '23505' && (error.constraint === 'animes_name_key' || error.constraint === 'genres_name_key')) {
    return res.status(status.CONFLICT).send(error.detail);
  }
  if (error.type === 'joi-error') {
    return res.status(status.UNPROCESSABLE_ENTITY).send(error.message);
  }
  if (error.type === 'conflict') {
    return res.status(status.CONFLICT).send(error.message);
  }

  return res.status(status.INTERNAL_SERVER_ERROR).send('An unexpected error has occurred');
}
