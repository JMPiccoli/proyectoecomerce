import React, { useState } from 'react'

const Test = ({ desde }) => {

  const [contador, setContador] = useState(desde)

  return (
    <div>

      <h1>PROP: {desde}</h1>
      <h2>STATE: {contador}</h2>

      <button onClick={() => {setContador(contador + 1)}}>SUMAR</button>
      <button onClick={() => {setContador(contador - 1)}}>RESTAR</button>
      <button onClick={() => {setContador(desde)}}>RESETEAR</button>
    </div>
  )
}

export default Test
