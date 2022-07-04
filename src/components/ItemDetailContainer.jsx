import {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { darkScrollbar } from '@mui/material';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


function ItemDetailContainer() {
    const {id} = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);    
    const [producto, setProducto] = useState([]);

    console.log("Id: " + id);

    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, 'productos', id);
        getDoc(productRef).then((snapshot) => {
          setProducto(snapshot.data());
          setLoading(false);
          
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        }
        );
      }, [id]);
    

    return (
        <div>
             {producto == undefined ? (
                 <p>loading</p>
             ) : (
                    <ItemDetail producto={producto} id={id} />
             )}
        </div>
    );
}

export default ItemDetailContainer;

