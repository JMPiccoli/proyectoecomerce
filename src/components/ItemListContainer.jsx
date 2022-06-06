import React from 'react';
import { miArray } from '../hooks/arrays';

function ItemListContainer({ greeting }) {
	return (
		<div className='centerElement'>
			<h1>{greeting}</h1>

		</div>
	);
}

export default ItemListContainer;
