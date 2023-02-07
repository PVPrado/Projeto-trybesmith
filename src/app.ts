import express from 'express';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());
// au

app.use(productRoute);
app.use(userRoute);

export default app;
