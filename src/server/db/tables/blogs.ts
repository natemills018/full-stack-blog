import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IBlogsRow extends RowDataPacket {
        id: number,
        title: string,
        content: string,
        author_id: number
}


//Update POST and PUT Functions on all tables for better scaling before moving to the front end.


export function getAll() {
    return SelectQuery<IBlogsRow>('SELECT * FROM blogs;');
}


// Note to self changing the query of the getAll function actually allowed me to see the id property!

// Does the export function give you access to different tables and columns where exporting it to the front end?



export function getOne(id: number) {
    return SelectQuery<IBlogsRow>('SELECT * FROM blogs WHERE id =?;',[id])
}


// By using an object to pass through the parameter, you're able to dynamically
export function updateBlogPost(id: number, updateContent: string) {
    return ModifyQuery<IBlogsRow>('UPDATE blogs SET ? content =? WHERE id =?;',[updateContent, id])
}

export function insert(title: string, content: string, author_id: number) {
    return ModifyQuery('INSERT INTO blogs (title, content, author_id) VALUE (?,?,?);',[title, content, author_id])
}