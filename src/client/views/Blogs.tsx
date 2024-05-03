import React, { useState, useEffect } from 'react';
import type { IBlogsRow } from '../types';
import { Link } from 'react-router-dom';

interface BlogsProps {

}

const Blogs = (props: BlogsProps) => {
    const [list, setList] = useState<IBlogsRow[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/blogs")
            .then(res => res.json())
            .then(list => setList(list));
    }, [])


    return (
        <main className='container'>
            <div className='row justify-content-center mt-5'>
                    {list.map((blog) => (
                        <div className="col-md-4 m-3 card card-shadow bg-warning" key={`div-${blog.id}`}>
                            <h5 className="card-title mt-2 text-center">
                                {blog.title}
                            </h5>
                            <div className='card-body mx-1'>
                                {blog.content}
                            </div>
                            <div className='card-footer text-center bg-secondary font-italic m-2'>{blog.title}</div>
                            <div className='d-flex justify-content-center pb-3'>
                                <Link to={`/blogs/${blog.id}`} className='btn btn-md btn-light'>Details</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    )
}


export default Blogs;