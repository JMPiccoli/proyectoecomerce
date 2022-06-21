import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({productos}) => {
    const { id, nombre, descripcion, precio, stock, imagen, categoria} = productos
    const [cantidad, setCantidad] = useState();

    function onAdd(contador){
      alert(`Se han agregado: ${contador} productos`);
      setCantidad(contador);
    }

    return (
       <>
         <div className="container container-detail">
           <div className="row">
             <div className="col-12 col-sm-6 pt-5">
               <div className="card mb-3 card-style">
                 <div className="row g-0">
                   <div className="col-md-4">
                     <img src={imagen} className="img-fluid img-detail" />
                   </div>
                   <div className="col-md-8 col-sm-6 pt-5">
                     <div className="card-body">
                       <h5 className="card-title card-title-detail">{nombre}</h5>
                       <p className="card-text card-detail mt-3">{descripcion}</p>
                       <p className="card-text price-detail">PRECIO: ${precio}</p>
                       <p className="card-text stock-detail">Hay {stock} productos en stock</p>
                       <button type="button" className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5">Agregar al Carrito</button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {cantidad > 0 ? <Link to={'/cart'} className="btn-fin">Finalizar compra</Link>:<ItemCount maximo={stock} inicial={1} onAdd={onAdd}/>} 
     </>
    );
  };

  export default ItemDetail;
