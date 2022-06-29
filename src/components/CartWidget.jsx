import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';


function CartWidget({ items }) {
	const {getItemQty} = useContext(CartContext)

	return (
		<>
			<ShoppingCartIcon />
			<span>{getItemQty()}</span>
		</>
	);
}

export default CartWidget;
