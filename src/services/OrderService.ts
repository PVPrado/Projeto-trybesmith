import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/OrderModel';
import connection from '../models/connection';

export default class OrderService {
  constructor(private ordersModel = new OrderModel(connection)) {}

  public getAll = async () => {
    const orders: IOrder[] = await this.ordersModel.getAll();
    return orders;
  };
}