import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import type { IBlogsRow } from '../types';
import { GET } from '../services/fetchData';
import { PUT } from '../services/fetchData';


interface EditBlogProps {
}

const EditBlog = (props: EditBlogProps) => {
    const nav = useNavigate();
    const { id } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        GET(`/api/blogs/${id}`).then(blog => setContent(blog.content));
    }, [])

    const updateBlog = () => {
        PUT(`/api/blogs/${id}`, { content })
            .then(data => {
                console.log(content)
                nav(`/blogs/${id}`);
            })
    }

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div>
                                <h1>You can update your blog here!</h1>
                                <input value={content} onChange={e => setContent(e.target.value)} />
                                <button className='rounded mx-4' onClick={updateBlog}>Click to update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )

}


export default EditBlog;


