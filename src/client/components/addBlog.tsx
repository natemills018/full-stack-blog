import React, { useState, useEffect} from 'react';
import { POST } from '../services/fetchData';
import { useNavigate, Link, useParams, useResolvedPath } from 'react-router-dom';
import type { IBlogsRow } from '../types';

interface AddProps {

}

const Add = (props: AddProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [content, setContent] = useState<string>('')

    const addBlog = () => {
        POST(`/api/blogs/${id}`, {content}).then(data => {
            console.log(data)
            navigate(`/blogs/${data.id}`)
        })
    }


    // const handleSubmit = 



    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div>
                                <h1>On this page you can add a blog!</h1>
                                <input value={content} onChange={e => setContent(e.target.value)} />
                                <button className='rounded mx-4' onClick={addBlog}>Click to Add your Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Add;



