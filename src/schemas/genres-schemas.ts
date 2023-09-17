import { GenreInput } from "@/types/genres-types";
import Joi from "joi";

export const genres_schemas = Joi.object<GenreInput>({
  name: Joi.string().required(),
  animeId: Joi.number().greater(0).required()
})