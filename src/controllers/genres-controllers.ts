import { genres_service } from '@/services/genres-services';
import { GenreInput } from '@/types/genres-types';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  const genre = req.body as GenreInput;
  await genres_service.create(genre);
  res.sendStatus(201);
};

const read = async (_req: Request, res: Response) => {
  const result = await genres_service.read();
  res.send(result);
};

export const genres_controller = {
  create,
  read,
};
