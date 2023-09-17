import { animes_repository } from '@/repositories/animes-repositories';
import { AnimeInput } from '@/types/animes-types';

const create = (anime: AnimeInput) => {
  return animes_repository.create(anime);
};

const read = () => {
  return animes_repository.read();
};

export const animes_service = {
  create,
  read,
};
