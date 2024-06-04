import React, { useEffect, useState } from 'react';
import Authors from './Authors';
import Blogs from './Blogs';

interface LoginProps {
    
}

const Login = (props: LoginProps) => {

    const [loginTime, setLoginTime] = useState<{message : string} | null >(null);

    useEffect (() => {

        const TOKEN = localStorage.getItem('token');

        console.log(TOKEN)


        fetch('/api/entry', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
            .then(res => res.json())
            .then(data => setLoginTime(data))
    }, [])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='text-center text-primary'>
                    {loginTime?.message}
                </h1>
            </section>
        </main>
    )
}

export default Login;