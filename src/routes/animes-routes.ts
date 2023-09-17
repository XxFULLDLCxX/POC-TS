import { animes_controller } from '@/controllers/animes-controllers';
import { validate } from '@/middlewares/validate-schemas';
import { animes_schemas } from '@/schemas/animes-schemas';
import { Router } from 'express';

export const animes_routes = Router();
animes_routes.get('/animes', animes_controller.read);
animes_routes.post('/animes', validate.body(animes_schemas), animes_controller.create);
