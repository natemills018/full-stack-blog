import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
// import NavBar from './components/NavBar';



interface AppProps {}

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
		{/* <NavBar/> */}
		<div className='px-5 py-2'>

		</div>

		<Routes>
			<Route path='/' element={<Home/>}></Route>
		</Routes>
		</BrowserRouter>


	);
};

// Inside of the initial div is where I plan to add stlying to the NavBar






export default App;

