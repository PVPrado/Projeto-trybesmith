import express from 'express';
import productRoute from './routes/productRoute';

const app = express();

app.use(express.json());
// au

app.use(productRoute);

export default app;
