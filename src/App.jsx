import React from 'react'
// import { Link, Route, Routes } from 'react-router-dom'
import { Detail, Home, Cart, Login } from './Pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {


	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/detail/:producto_id' element={<Detail />} />
			<Route path='/cart' element={<Cart />} />
		</Routes>
	)
}

export default App