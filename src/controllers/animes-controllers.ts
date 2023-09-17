import { animes_service } from '@/services/animes-services';
import { AnimeInput } from '@/types/animes-types';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  const anime = req.body as AnimeInput;
  await animes_service.create(anime);
  res.sendStatus(201);
};

const read = async (_req: Request, res: Response) => {
  const result = await animes_service.read();
  res.send(result);
};

export const animes_controller = {
  create,
  read,
};
