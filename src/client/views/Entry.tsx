import React, { useEffect, useState } from 'react';
import Authors from './Authors';
import Blogs from './Blogs';
import { TOKEN_KEY } from '../services/fetchData';

interface entryProps {
    
}

const Entry = (props: entryProps) => {

    const [entryTime, setEntryTime] = useState<{message : string} | null >(null);

    useEffect (() => {

        const TOKEN = localStorage.getItem(TOKEN_KEY);

        console.log(TOKEN)


        fetch('http://localhost:3000/api/entry', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })
            .then(res => res.json())
            .then(data => setEntryTime(data))
    }, [])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='text-center text-primary'>
                    Enrty page!
                    {entryTime?.message}
                </h1>
            </section>
        </main>
    )
}

export default Entry;