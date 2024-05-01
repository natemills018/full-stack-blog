import React from 'react';
interface HomeProps {

}

const Home = (props: HomeProps) => {
    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <h1 className='text-center text-primary'>
                    Welcome to CRUD
                </h1>
                <div className='container d-flex justify-content-center align-items-center'>
                    
                </div>
            </section>
        </main>
    )
}

export default Home;


// Good reminder that the components that are built for the front end have to have the additional x to .jsx
