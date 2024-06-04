import React, { useState, useEffect } from 'react';
import type { IBlogsRow } from '../types';
import { Link } from 'react-router-dom';

interface ThanksProps {

}

const Thanks = (props: ThanksProps) => {
    

    // useEffect(() => {
    //     fetch("http://localhost:3000/api/Thanks")
    //         .then(res => res.json())
    //         .then(list => setList(list));
    // }, [])

    // console.log(list);


    return (
        <main className='container'>
            <div className='row justify-content-center mt-5'>
            <h1 className='d-flex justify-content-center align-items-center mb-5'> Blog's Enpoint
                </h1>
                    
            </div>
        </main>
    )
}


export default Thanks;