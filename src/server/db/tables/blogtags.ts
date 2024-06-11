import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IBlogTagsRow extends RowDataPacket {
        id?: number,
        title?: string,
        content?: string,
        author_id?: number
}

// update this with the correct interface parameters sso that youj dont run into any other errors. 

export function getAll() {
    return SelectQuery<IBlogTagsRow>('SELECT * FROM blogs_tags JOIN authors ON authors.id = blogs.author.id;');
}

// export function getOne(id: number) {
//     return SelectQuery<IBlogTagsRow>('SELECT * FROM blogs_tags WHERE id =?;,'[id])
// }

// export function updateBlogPost(id: number, content: string) {
//     return ModifyQuery<IBlogTagsRow>('UPDATE blogs SET content =? WHERE id =?;',[content])
// }

// export function insertBlogPost(title: string, content: string) {
//     return ModifyQuery('INSERT INTO blogs (title,content) VALUE (?,?);',[title,content])
// }


