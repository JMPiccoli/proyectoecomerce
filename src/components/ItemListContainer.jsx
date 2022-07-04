import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
	const {id} = useParams();	
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const productosCollection = collection(db, 'productos');

		if (id) {
			const q = query(productosCollection, where('categoria', '==', id));
	  
			getDocs(q)
			.then((snapshot) => {
			  setProductos(
				snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
			  );
			  setLoading(false);
			}
			).catch(error => {
			  setError(error);
			  setLoading(false);
			});
		  } else {
			getDocs(productosCollection)
			.then((snapshot) => {
			  setProductos(
				snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
			  );
			setLoading(false);
		  }
		  ).catch(error => {
			setError(error);
			setLoading(false);
		  });
		}
	  
	}, [id]);

	return (
		<div className='centerElement'>
			{/* <h1>{greeting}</h1> */}
			<div>{loading && "Loading..."}</div>
			<div>{error && "Se produjo un error, por favor vuelva a intentarlo."}</div>
			<ItemList articulos={productos}/>
		</div>
	);
}


