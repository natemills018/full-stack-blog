import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IBlogsRow extends RowDataPacket {
        id: number,
        title: string,
        content: string,
        author_id: number
}


export function getAll() {
    return SelectQuery<IBlogsRow>('SELECT * FROM blogs JOIN authors ON authors.id = blogs.author.id');
}