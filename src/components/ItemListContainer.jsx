import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import productos from '../hooks/products.js'
import { useParams } from "react-router-dom";
import { miArray } from '../hooks/arrays';

export default function ItemListContainer() {
	const {id} = useParams();	
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [result, setResult] = useState([]);

	useEffect(() => {
		const muestraArticulos = new Promise((res,) => {
			setTimeout(() => {
			  (!id) ? res (productos) : res (productos.filter(item => item.categoria === id));
		  console.log(productos)
			  
			}, 2000);
		  });		

		muestraArticulos
			.then((result) => {
				setResult(result);
			})

			.catch((error) => {
				setError(true);
				console.log(error);
			})

			.finally(() => {
				setLoading(false);
			})
	}, [id]);

	return (
		<div className='centerElement'>
			{/* <h1>{greeting}</h1> */}
			<div>{loading && "Loading..."}</div>
			<div>{error && "Se produjo un error, por favor vuelva a intentarlo."}</div>
			<ItemList articulos={result}/>
		</div>
	);
}


