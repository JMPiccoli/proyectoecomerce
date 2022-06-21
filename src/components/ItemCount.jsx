import React, { useState } from 'react'

const ItemCount = ({initial, max, onAdd}) => {

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
    <div>
        <h2>{count}</h2>
        {/* <button class="button-12" role="button" onClick={sumar}>+</button>
        <button class="button-12" role="button" onClick={restar}>-</button> */}
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => onAdd(count)}>Agregar</button>
    </div>
  )
}

export default ItemCount