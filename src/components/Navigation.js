import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import SContext from './SContext'

const Navigation = props => {
	const cart =useContext(SContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
