import { Request } from 'express';
import { AuthorsTable } from '../models';


export interface ReqUser extends Request {
    user?: AuthorsTable
}

export interface Payload {
    userid: number;
    email: string;
    role: number;
}

export interface MysqlResponse {
    affectedRows: number;
    insertId: number;
}