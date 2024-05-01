import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import type { IAuthorsRow } from '../types';
interface AuthorsProps {

}

const Authors = (props: AuthorsProps) => {
    const [list, setList] = useState<IAuthorsRow[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/api/authors")
        .then(res => res.json())
        .then(list => setList(list));
    }, [])


    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='col-12 col-md-6'> 
                    <ul className='list-group'>
                        {list.map(author => (
                            <li className='list-group-item d-flex justify-content-between align-items center'
                            key={`author-${author.id}`}>
                                <h2>{author.name}</h2>

                                <h5 className='text-primary pt-1'>{author.email}</h5>

                                <Link to={`/authors/${author.id}`} className='btn btn-secondary'> Details</Link>
                            </li>
                        ))}
                    </ul>

                </h1>
            </section>
        </main>
    )
}

export default Authors;