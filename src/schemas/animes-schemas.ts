import { AnimeInput } from "@/types/animes-types";
import Joi from "joi";

export const animes_schemas = Joi.object<AnimeInput>({
  name: Joi.string().required()
})