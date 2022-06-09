import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import { miArray } from '../hooks/arrays';

export default function ItemListContainer() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [result, setResult] = useState([]);

	useEffect(() => {
		const muestraArticulos = new Promise((res, rej) => {
			setTimeout(() => {
				res([
					{id: "1", nombre: "Cuaderno cuadriculado", descripcion: "Cuaderno cuadriculado con resorte tamaño A4", precio: "540.00", stock: "200", imagen: "/images/CuadernoCuadriculado.png"},
					{id: "2", nombre: "Lapicera bic", descripcion: "Lapicera tipo bolígrafo negra/azul/roja/verde", precio: "50.00", stock: "120", imagen: "/images/LapiceraBic.png"},
					{id: "3", nombre: "Block de hojas rayadas x 500", descripcion: "Block de hojas rayadas tres perforaciones", precio: "1540.00", stock: "150", imagen: "/images/BlockHojas.png"},
					{id: "4", nombre: "Resaltadores varios colores", descripcion: "Resaltadores de varios colores", precio: "100.00", stock: "40", imagen: "/images/Resaltadores.png"},
					{id: "5", nombre: "Regla de 20 cm", descripcion: "Regla de plástico de 20cm transparente", precio: "200.00", stock: "80", imagen: "/images/Regla.png"},
					{id: "6", nombre: "Separadores de colores x 10", descripcion: "Hojas separadoras de varios colores de 3 perforaciones", precio: "70.00", stock: "100", imagen: "/images/Separadores.png"},
					{id: "7", nombre: "Fibras de colores x 12", descripcion: "Fibras de Faber de distintos colores", precio: "195.00", stock: "75", imagen: "/images/Fibras.png"},
					{id: "8", nombre: "Cuaderno rayado", descripcion: "Cuaderno rayado de 96 hojas tamaño A4", precio: "490.00", stock: "200", imagen: "/images/CuadernoRayado.png"},

				]);
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
	}, []);

	return (
		<div className='centerElement'>
			{/* <h1>{greeting}</h1> */}
			<div>{loading && "Loading..."}</div>
			<div>{error && "Se produjo un error, por favor vuelva a intentarlo."}</div>
			<ItemList articulos={result}/>
		</div>
	);
}


