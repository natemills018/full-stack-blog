import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface ITagsRow extends RowDataPacket {
        id: number,
        title: string,
        content: string,
        author_id: number
}


export function getAll() {
    return SelectQuery<ITagsRow>('SELECT * FROM tags;');
}

export function getOne(id: number) {
    return SelectQuery<ITagsRow>('SELECT * FROM tags WHERE id =?;,'[id])
}

export function updateTag(id: number, name: string) {
    return ModifyQuery<ITagsRow>('UPDATE tags SET name =? WHERE id =?;',[name])
}

export function insertBlogPost(name: string) {
    return ModifyQuery('INSERT INTO tags (name) VALUE (?);',[name])
}