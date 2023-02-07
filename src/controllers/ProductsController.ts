import { Request, Response } from 'express';
import ProductService from '../services/ProductsServices';

export default class ProductController {
  constructor(public productService = new ProductService()) {}

  public async insert(req: Request, res: Response) {
    const product = req.body;

    const create = await this.productService.insert(product);
    res.status(201).json(create);
  }
}