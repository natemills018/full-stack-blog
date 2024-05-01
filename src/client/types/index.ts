export interface IBlogsRow {
    id: number;
    title: string;
    content: string;
    author_id: number;
}


export interface IAuthorsRow {
    id: number;
    name: string;
    email: string;
    phonenumbe: string;
}


export interface IBlogTagsRow {
    id: number;
    blog_id: number;
    author_id: number
}

export interface ITagsRow {
    id: number;
    name: string;
}