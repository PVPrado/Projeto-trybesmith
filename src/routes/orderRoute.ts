import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const routers = Router();

const controller = new OrderController();

routers.get('/orders', (req, res) => controller.getAll(req, res));

export default routers;