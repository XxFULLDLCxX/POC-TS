import { db } from '@/config/db-connection';
import { Anime, AnimeInput } from '@/types/animes-types';

const create = ({ name }: AnimeInput) => {
  return db.query(`INSERT INTO "animes" ("name") VALUES ($1);`, [name]);
};

const read = async () => {
  return (
    await db.query<Anime>(`
    SELECT "animes".*, json_agg("genres"."name") "genres"  FROM "animes" 
    JOIN "genres" ON "animeId" = "animes"."id"
    GROUP BY "animes"."id"
    ;`)
  ).rows;
};

export const animes_repository = {
  create,
  read,
};
