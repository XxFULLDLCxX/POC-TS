import { Router } from "express";
import { animes_routes } from "./animes-routes";
import { genres_routes } from "./genres-routes";

export const routes = Router();
routes.use(animes_routes);
routes.use(genres_routes);