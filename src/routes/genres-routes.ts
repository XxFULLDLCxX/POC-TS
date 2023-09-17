import { genres_controller } from '@/controllers/genres-controllers';
import { validate } from '@/middlewares/validate-schemas';
import { genres_schemas } from '@/schemas/genres-schemas';
import { Router } from 'express';

export const genres_routes = Router();
genres_routes.get('/genres', genres_controller.read);
genres_routes.post('/genres', validate.body(genres_schemas), genres_controller.create);
