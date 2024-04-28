import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IBlogsRow extends RowDataPacket {
        id: number,
        title: string,
        content: string,
        author_id: number
}


export function getAll() {
    return SelectQuery<IBlogsRow>('SELECT * FROM blogs;');
}

export function getOne(id: number) {
    return SelectQuery<IBlogsRow>('SELECT * FROM blogs WHERE id =?;,'[id])
}

export function updateBlogPost(id: number, content: string) {
    return ModifyQuery<IBlogsRow>('UPDATE blogs SET content =? WHERE id =?;',[content])
}

export function insert(title: string, content: string) {
    return ModifyQuery('INSERT INTO blogs (title,content) VALUE (?,?);',[title,content])
}