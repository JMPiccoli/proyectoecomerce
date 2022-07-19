import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


function CartWidget({ items }) {
	const {getItemQty} = useContext(CartContext)

	return (
		<>
			<Link to="/cart"><ShoppingCartIcon />
			<span>{getItemQty()}</span>
			</Link>
		</>
	);
}

export default CartWidget;
