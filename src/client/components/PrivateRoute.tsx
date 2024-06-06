import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, redirect } from 'react-router-dom';
import type { IBlogsRow } from '../types';
import { GET, TOKEN_KEY } from '../services/fetchData';
import { PUT } from '../services/fetchData';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';



// interface PrivateRouteProps {
//     path: string;
//     exact?: boolean;
//     children: React.ReactNode;
// }

// const PrivateRoute = ({children, ...rest}: PrivateRouteProps) => {
//     const nav = useNavigate();
//     const TOKEN = localStorage.getItem('token');

//     if(!TOKEN) {
//         return (
//         redirect('/api/login')
//         )
//     } else  {
//         return (
//             <Route {... rest}>{children}</Route>
//         )
//     }

const PrivateRoute = ({children}: { children: React.ReactNode}) => {
    const nav = useNavigate();
    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if(!TOKEN) {
        return (
            <Navigate to={'/'} />
        )
    } else  {
        return (
            <main className='container mt-5'>
    //         <section className='row justify-content-center'>
    //             <div className='col-12 col-md-6'>
    //                 <div className='card shadow'>
    //                     <div className='card-body'>
    //                         <div>
                               {children}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </main>
        )
    }



    // return (
    //     <main className='container mt-5'>
    //         <section className='row justify-content-center'>
    //             <div className='col-12 col-md-6'>
    //                 <div className='card shadow'>
    //                     <div className='card-body'>
    //                         <div>
                               
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </main>

    // )

}


export default PrivateRoute;