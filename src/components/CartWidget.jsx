import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import { Badge } from '@mui/material';


function CartWidget({ items }) {
	const {getItemQty} = useContext(CartContext)

	return (
		<>
			{/* <Badge badgeContent={getItemQty()}	/> */}
			<ShoppingCartIcon />
			<span>{items}</span>
		</>
	);
}

export default CartWidget;
