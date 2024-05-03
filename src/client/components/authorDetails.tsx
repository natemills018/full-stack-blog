import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IAuthorsRow } from '../types';


interface AuthorProps {

}

const Author = (props: AuthorProps) => {
    const { id } = useParams();
    const [data, setData] = useState<IAuthorsRow | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/authors/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => alert(e.message))
    }, [id])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='card shadow'>
                        <div className='card-body bg-warning'>
                            <h2 className='card-title d-flex justify-content-center align-items-center'> Author Details #{id}</h2>
                            <p className='card-title  d-flex justify-content-center text-dark align-items-center'><span className='text-decoration-underline'>{data?.name}</span> </p>
                            <p className='card-text'>If you need any additional information please reach out via email <span className='text-decoration-underline'>{data?.email} </span>
                            or shoot a text to this unique number <span className='text-decoration-underline'>{data?.phonenumbe}</span>
                            </p>
                            
                            <Link to='/authors' className='btn btn-outline btn-primary'>Go Back to Authors</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Author;