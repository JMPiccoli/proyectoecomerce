import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './item.css';

function Item({articulo}) {
    const { id, nombre, descripcion, precio, stock, imagen} = articulo
    console.log('Articulo: ',articulo)
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                Artículo: {id}
                {/* <br />
                Descripción: {descripcion} */}
                <br />
                Precio: {precio}
                <br />
                Stock: {stock}
            </Card.Text>
            <Link to = {'/item/'+ id} ><Button variant="primary">Detalle</Button></Link>
        </Card.Body>
    </Card>
  )
}

export default Item