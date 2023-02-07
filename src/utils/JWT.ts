import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const TOKEN_SECRET = process.env.JWT_SECRET || 'setesecret';

const generateToken = (payload: IUser) => 
  jwt.sign(payload, TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: '15m',
  });

export default generateToken;