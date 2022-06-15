import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const ItemDetail = ({productos}) => {
    console.log(productos)
    const { id, nombre, descripcion, precio, stock, imagen, categoria} = productos
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

     </>
    );
  };

  export default ItemDetail;
