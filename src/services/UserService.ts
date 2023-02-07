import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { IUser } from '../interfaces/IUser';
import generateToken from '../utils/JWT';

export default class UserService {
  constructor(public userModel = new UserModel(connection)) {}

  public async insert(user: IUser): Promise<object> {
    await this.userModel.insert(user);
    const token = generateToken(user);

    return { token };
  }
}