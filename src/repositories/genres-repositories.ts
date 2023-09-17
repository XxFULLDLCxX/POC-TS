import { db } from '@/config/db-connection';
import { Genre, GenreInput } from '@/types/genres-types';

const create = ({ name, animeId }: GenreInput) => {
  return db.query(`INSERT INTO "genres" ("name", "animeId") VALUES ($1, $2);`, [name, animeId]);
};

const read = async () => {
  return (await db.query<Genre>('SELECT * FROM "genres";')).rows;
};

export const genres_repository = {
  create,
  read,
};
