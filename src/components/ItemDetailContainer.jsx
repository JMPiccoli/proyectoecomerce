import {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
    const [producto, setResult] = useState();


    useEffect(() => {
        fetch('products.json', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setResult(data[0]);
                console.log(data[0]);
                console.log(producto)
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            })
            .finally(() => {
                console.log('Final del Proceso');
            })
    }, []);

    return (
        <>
            {producto === undefined ? (
                <p>loading</p>
            ) : (
                <ItemDetail id={producto.id} nombre={producto.nombre} imagen={producto.imagen} detalle={producto.detalle} precio={producto.precio} stock={producto.stock} />
            )}
        </>
    );
}

