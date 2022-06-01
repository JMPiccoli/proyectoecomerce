import React from 'react';
import { miArray } from '../hooks/arrays';

function ItemListContainer({ greeting }) {
	return (
		<>
			<h1>{greeting}</h1>
			{miArray.map((item, index) => {
				const {} = item;
				return <p>{item}</p>;
			})}
		</>
	);
}

export default ItemListContainer;
