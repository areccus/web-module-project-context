import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import PContext from './components/PContext'
import SContext from './components/SContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<SContext.Provider value={cart}>
			<Navigation/>

			{/* Routes */}
			<PContext.Provider value={{products, addItem}}>
			<Route exact path="/">
				<Products/>
			</Route>
			</PContext.Provider>

			<Route path="/cart">
				<ShoppingCart/>
			</Route>
			</SContext.Provider>
		</div>
	);
}

export default App;
