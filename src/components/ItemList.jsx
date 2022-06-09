import React from 'react';
import Item from './Item';
import './itemlist.css';

const ItemList = ({articulos}) => {
  return (
    <div className='itemlist'>
        {articulos.map(articulo => <Item key={articulo.id} articulo={articulo} />)}

    </div>
  )
}

export default ItemList
