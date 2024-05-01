import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
import Authors from './views/Authors';
import Author from './components/authorDetails';
// import NavBar from './components/NavBar';



interface AppProps {}

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
		{/* <NavBar/> */}
		<div className='px-5 py-2'>

			<Link to= '/' className='btn btn-outline btn-primary m-3'>Home</Link>
			<Link to= '/authors' className='btn btn-outline btn-light m-3'>Authors</Link>
			<Link to= '/blogs' className='btn btn-outline btn-secondary m-3'>Blogs</Link>
			<Link to= '/blogs/new' className='btn btn-outline btn-success m-3'>Create</Link>
			<Link to= '/tags' className='btn btn-outline btn-danger m-3'>Tags</Link>
		</div>

		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/authors' element={<Authors/>} />
			{/* <Route path='/blogs' element={<Blogs/>}/> */}
			<Route path='/authors/:id'element={<Author/>}/>

			
		</Routes>
		</BrowserRouter>


	);
};

// Inside of the initial div is where I plan to add stlying to the NavBar






export default App;

