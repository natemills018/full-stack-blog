import React, {useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import type { IBlogsRow } from '../types';

import { DELETE } from '../services/fetchData';

interface DeleteBlogProps {
}

const DeleteBlog = (props: DeleteBlogProps) => {
    const nav = useNavigate();
    const { id } = useParams();
    const [content, setContent] = useState('');

    const deleteBlog = () => {
        DELETE(`/api/blogs/${id}`).then(blog => console.log(blog));
    }


    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div>
                                <h1>You can Delete Blog {id} here!</h1>
                                <input value={content} onChange={e => setContent(e.target.value)} />
                                <button className='rounded mx-4' onClick={deleteBlog}>Click to Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )

}


export default DeleteBlog;
