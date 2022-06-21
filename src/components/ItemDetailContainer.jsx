import {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import productos from '../hooks/products.js';
import { darkScrollbar } from '@mui/material';
import ItemList from './ItemList';


function ItemDetailContainer() {
    const {id} = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);    
    const [producto, setProduct] = useState([]);

    console.log("Id: " + id);

  useEffect(() => {
        setProduct({});
        setLoading(true);
        setError(false);

        const promesa = new Promise((res,) => {
        setTimeout(() => {
            res(productos.find(item => item.id === id));
        }, 2000); 
    });
        promesa
        .then((producto) => {
            setProduct(producto);
        })
        
        .catch((error) => {
            setError(true);
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);
    
//   useEffect(() => {
//         setTimeout(() => {
//             fetch('/products.json', {
//                 method: 'GET',
//             })
//                 .then((res) => res.json() )
//                 .then((res) => {
//                   console.log(res[0]);
//                     setProduct(res[0]);
//                 })
//                 .catch((error) => {
//                     console.log('Hubo un error', error);
//                 })
//         },);
//     }, [id]);

    console.log(producto);

    return (
        <div>

             {producto == undefined ? (
                 <p>loading</p>
             ) : (
                    <ItemDetail producto={producto} />
                //  <ItemDetail id={producto.id} nombre={producto.nombre} imagen={producto.imagen} detalle={producto.detalle} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} />
             )}
        </div>
    );
}

export default ItemDetailContainer;

