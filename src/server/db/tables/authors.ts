import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MysqlResponse } from "../../types";

// should probably move all of the interfaces to a types folder for better legibility




export interface IAuthorsRow extends RowDataPacket {
        id: number,
        name: string,
        email: string,
        phonenumbe: number,
        created_at: number
}

export function find(column: string, value: string) {
    return SelectQuery<IAuthorsRow>('SELECT * FROM authors WHERE ?? = ?;', [column, value]);
}

export function insert(newAuthor: { email: string, password: string}) {
    return ModifyQuery<MysqlResponse>(
        'INSERT INTO users SET ?', newAuthor
    )
}


export function getAll() {
    return SelectQuery<IAuthorsRow>('SELECT * FROM authors;');
}

export function getOne(id: number) {
    return SelectQuery<IAuthorsRow>('SELECT * FROM authors WHERE id =?;',[id])
}

export function updateBlogPost(id: number, name: string) {
    return ModifyQuery<IAuthorsRow>('UPDATE authors SET name =? WHERE id =?;',[name])
}

// export function insert(name: string, email: string) {
//     return ModifyQuery('INSERT INTO authors (name,email) VALUE (?,?);',[name, email])
// }