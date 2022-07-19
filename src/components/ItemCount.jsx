import React, { useState } from 'react';
import './itemCount.css';
import swal from 'sweetalert';


const ItemCount = ({cantidad, setCantidad,  max, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < max) {
            setCount(count + 1)
        }else {
            swal({
                title: "Alerta!!!",
                text: "Llegaste al stock máximo",
                icon: "warning",
                button: "Aceptar"
            })
        }   
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : 
        swal({
            title: "Alerta!!!",
            text: "No puedes quitar más productos",
            icon: "warning",
            button: "Aceptar"
        })
    }

    return (
    <div className="contador-style">
        <button onClick={restar}>-</button>
         <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={() => onAdd(count)}>Agregar</button>
    </div>
  )
}

export default ItemCount