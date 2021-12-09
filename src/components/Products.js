import React, {useContext} from 'react';
import PContext from './PContext'
// Components
import Product from './Product';

const Products = props => {
	const {products} = useContext(PContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
