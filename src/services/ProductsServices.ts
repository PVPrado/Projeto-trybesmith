import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/ProductsModel';
import connection from '../models/connection';

export default class ProductService {
  constructor(public productModel = new ProductModel(connection)) {}

  public async insert(product: IProduct) {
    const create: IProduct = await this.productModel.insert(product);
    return create;
  }
}