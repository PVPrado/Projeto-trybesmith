import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class ProductController {
  constructor(public userService = new UserService()) {}

  public async insert(req: Request, res: Response) {
    const token = await this.userService.insert(req.body);
    res.status(201).json(token);
  }
}