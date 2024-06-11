import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import type { IAuthorsRow } from '../types';
import { GET } from '../services/fetchData';

interface AuthorsProps {

}

const Authors = (props: AuthorsProps) => {
    const [list, setList] = useState<IAuthorsRow[]>([]);
    
    useEffect(() => {
        GET('/api/authors')
        .then(list => setList(list));
    }, [])


    // console.log(list);

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                {/* <h1 className='d-flex justify-content-center align-items-center mb-5'> Author's Enpoint
                </h1> */}
                <h1 className='col-12 col-md-6'> 
                    <ul className='list-group'>
                        {list.map(author => (
                            <li className='list-group-item d-flex bg-warning justify-content-between align-items center'
                            key={`author-${author.id}`}>
                                <h2>{author.name}</h2>

                                <h6 className='text-primary pt-2'>{author.email}</h6>

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