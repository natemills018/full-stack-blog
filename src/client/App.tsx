import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Update';
import Authors from './views/Authors';
import Author from './components/authorDetails';
import Blogs from './views/Blogs';
import Blog from './components/blogDetails';
import Update from './views/Update';
import EditBlog from './components/editBlog';
import Add from './components/addBlog';
import Contact from './views/Contact';
import Donate from './views/Donate';
import Thanks from './views/Thanks';
import Entry from './views/Entry';

import './styles/app.scss';
import PrivateRoute from './components/PrivateRoute';


// import NavBar from './components/NavBar';



interface AppProps { }

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			{/* <NavBar/> */}
			<div>
			
			</div>
			<div className='px-5 py-2'>
				<div className='m-3 fw-bold '>Banjo & Kazooie's Blogs</div>
				<img src='/images/Banjo_3.png' />
				<Link to='/' className='btn btn-outline btn-primary m-3'>Home</Link>
				<Link to='/authors' className='btn btn-outline btn-light m-3'>Authors</Link>
				<Link to='/blogs' className='btn btn-outline btn-secondary m-3'>Blogs</Link>
				<Link to='/donate' className='btn btn-outline btn-secondary m-3'>Donate</Link>
				{/* <Link to='/update' className='btn btn-outline btn-success m-3'>Update Blog</Link> */}
				<Link to='/contact' className='btn btn-outline btn-secondary m-3'>Contact Us!</Link>
				<Link to='/blogs/new' className='btn btn-outline btn-danger m-3'>Add Blog</Link>
			</div>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/authors/:id' element={<Author />} />
				<Route path='/blogs/:id' element={<Blog />} />
				<Route path='/authors' element={<Authors />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/updateblog' element={<EditBlog />} />
				<Route path='/blogs/new' element={<Add />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/donate' element={<Donate />} />
				<Route path='/thank-you' element={<Thanks />} />
				<Route path='/entry' element={<PrivateRoute> <Entry /></PrivateRoute>} />
				<Route path='/login' element={<Entry/>}/>
				
			</Routes>
		</BrowserRouter>


	);
};

// Inside of the initial div is where I plan to add stlying to the NavBar






export default App;

