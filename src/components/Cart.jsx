import React, { useContext } from 'react'
import { CartContext } from './CartContext';

export default function Cart() {

    const {cart} = useContext(CartContext)
    return (
        <>
            {/* {
              cart.length > 0 ?  cart.map((element, index) => {
                  return 
              }) : <h2>TU CARRITO ESTÁ VACÍO</h2>
            } */}
          <h1>Cart</h1>
        </>
  )
}