import { Request } from 'express';

export interface CustomDbRequest extends Request {
  config?: any;
  mysqldb?: any;
}
