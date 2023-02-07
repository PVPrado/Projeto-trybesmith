import { Router } from 'express';
import UserController from '../controllers/UserController';

const routers = Router();

const controller = new UserController();

routers.post('/users', (req, res) => controller.insert(req, res));

export default routers;