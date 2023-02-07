import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const routers = Router();

const controller = new ProductController();

routers.post('/products', (req, res) => controller.insert(req, res));
routers.get('/products', (req, res) => controller.getAll(req, res));

export default routers;