import React, { useState } from 'react';
import './itemCount.css';
import { CartContext } from './CartContext';

const ItemCount = ({cantidad, setCantidad,  max, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < max) {
            setCount(count + 1)
        }else {
            alert('Llegaste al stock máximo del producto')
        }   
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : alert('No puedes quitar más productos')
    }

    const reset = () => {
        setCount(initial)
    }

    console.log('Valores ',count, initial, max )
    return (
    <div className="contador-style">
        <button onClick={restar}>-</button>
         <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => onAdd(count)}>Agregar</button>
    </div>
  )
}

export default ItemCount