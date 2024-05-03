import React from 'react';
import Authors from './Authors';
import Blogs from './Blogs';

interface HomeProps {

}

const Home = (props: HomeProps) => {
    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='text-center text-primary'>
                    Banjo's Blogs
                </h1>
                <div className='container'>
                    <div><Authors/></div>
                    <div><Blogs/></div>
                </div>
            </section>
        </main>
    )
}

export default Home;


// Good reminder that the components that are built for the front end have to have the additional x to .jsx
