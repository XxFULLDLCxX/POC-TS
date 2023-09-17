import express, { json } from 'express';
import 'express-async-errors';
import { routes } from './routes/routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(json());
app.use(routes);
app.use(errorHandler);

const port = Number(process.env.PORT) || 5000;

app.listen(5000, () => console.log(`Server is listen on port ${port}...`));
