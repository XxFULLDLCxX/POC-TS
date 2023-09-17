import { genres_repository } from '@/repositories/genres-repositories';
import { GenreInput } from '@/types/genres-types';

const create = (genre: GenreInput) => {
  return genres_repository.create(genre);
};

const read = () => {
  return genres_repository.read();
};

export const genres_service = {
  create,
  read,
};
