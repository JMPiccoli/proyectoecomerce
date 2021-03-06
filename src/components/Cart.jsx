import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './cart.css';

export default function Cart() {
    const {cart, emptyCart, getItemCart, deleteItem} = useContext(CartContext);

    return (
        <>
            <h1 style={{ textAlign: 'center'}}>Tu Carrito de Compras</h1>
            { 
              cart.length > 0 ?  cart.map((element, index) => {
                    return <div>
                        <div className="card rounded-3 mb-4">
                          <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={element.imagen} className="img-fluid rounded-2" alt="Cotton T-shirt" />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <p className="lead fw-normal mb-2">{element.nombre}</p>
                                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                  <i className="fas fa-minus" />
                                </button>
                                <input id="form1" min={0} name="quantity" defaultValue={element.contador} type="number" className="form-control form-control-sm" />
                                <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                  <i className="fas fa-plus" />
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">{element.precio}</h5>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-danger" onClick={() => deleteItem(element.id)}><i className="fas fa-trash fa-lg" />Eliminar</a>
                              </div>
                            </div>
                           </div>
                         </div>
       
                      </div>

              }) : <h2 style={{ textAlign: 'center'}}>EST?? VAC??O</h2>
            }

            <div className="cart-footer">
                {cart.length === 0?
                    <Link to="/"><button className="botonPrincipal">Volver al inicio</button></Link>
                :
                    <>
                        <h3>Total: ${getItemCart()}</h3>
                        <Link to="/checkout"><button type="button" className="botonCarrito">Ir a Pagar</button></Link>
                        <button type="button" className="botonCarrito" onClick={emptyCart}>Vaciar Carrito</button>
                    </>
                }
            </div>
          
        </>
  )
}