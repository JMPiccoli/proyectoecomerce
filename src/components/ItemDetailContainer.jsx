import {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { darkScrollbar } from '@mui/material';
import ItemList from './ItemList';


function ItemDetailContainer() {
    // const {Id} = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);    
  const [producto, setProduct] = useState();
   
  useEffect(() => {
        setTimeout(() => {
            fetch('/products.json', {
                method: 'GET',
            })
                .then((res) => res.json() )
                .then((res) => {
                  console.log(res[0]);
                    setProduct(res[0]);
                })
                .catch((error) => {
                    console.log('Hubo un error', error);
                })
        },);
    }, []);

    console.log(producto);

    return (
        <div>

             {producto == undefined ? (
                 <p>loading</p>
             ) : (
                    <ItemDetail productos={producto} />
                //  <ItemDetail id={producto.id} nombre={producto.nombre} imagen={producto.imagen} detalle={producto.detalle} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} />
             )}
        </div>
    );
}

export default ItemDetailContainer;

