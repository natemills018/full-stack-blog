import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import type { IBlogsRow } from '../types';
import { GET } from '../services/fetchData';
import { PUT } from '../services/fetchData';


interface EditBlogProps {
}

const EditBlog = (props: EditBlogProps) => {
    const nav = useNavigate();
    const {id} = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        GET(`/api/blogs/${id}`).then(blog => setContent(blog.content));
    }, [id])

    const updateBlog = () => {
        PUT(`/api/blogs/${id}`, {content})
        .then(data => { 
            console.log(data)
            nav(`/blogs/${id}`);
        })
    }

    return (
        <div>
            <h1>You can update your blog here!#{id}</h1>
            <input value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={updateBlog}>Click to update</button>
        </div>
    )

}


export default EditBlog;


