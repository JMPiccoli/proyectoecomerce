import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { CartContext } from './CartContext';
import swal from 'sweetalert';
import './itemDetail.css';

const ItemDetail = ({ producto, id }) => {
    const { nombre, descripcion, precio, stock, imagen, categoria} = producto
    const [cantidad, setCantidad] = useState(1);

    const {isInCart, addItem} = useContext(CartContext)

    function onAdd(contador){
      swal({
        title: "Correcto!!!",
        text: `Se han agregado: ${contador} productos`,
        icon: "success",
        button: "Aceptar"
      })
      setCantidad(contador);
      isInCart(id);
      addItem(producto, contador, id);
    }
    console.log('Cantidad: ' + cantidad)
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
                       <p className="card-text stock-detail">Categoría: {categoria}</p>
                       {/* <button type="button" className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5">Agregar al Carrito</button> */}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

         {cantidad > 1 ? 
            <>
              <Link to={'/'}><button className="btn-fin">Seguir comprando</button></Link>
              <Link to={'/cart'}><button className="btn-fin">Finalizar compra</button></Link> 
            </> :
            <ItemCount cantidad={cantidad} setCantidad={setCantidad} max={stock} initial={1} onAdd={onAdd}/>} 
     </>
    );
  };

  export default ItemDetail;
