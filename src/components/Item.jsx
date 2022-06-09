import { LibraryAddOutlined } from '@mui/icons-material'
import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Item({articulo}) {
    const { id, nombre, descripcion, precio, stock, imagen} = articulo
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                Artículo: {id}
                <br />
                Descripción: {descripcion}
                <br />
                Precio: {precio}
                <br />
                Stock: {stock}
            </Card.Text>
            <Button variant="primary">Detalle</Button>
        </Card.Body>
    </Card>
  )
}

export default Item