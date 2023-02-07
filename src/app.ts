import express from 'express';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';

const app = express();

app.use(express.json());
// au

app.use(productRoute);
app.use(userRoute);
app.use(orderRoute);

export default app;
