import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const routers = Router();

const controller = new ProductController();

routers.post('/products', (req, res) => controller.insert(req, res));

export default routers;