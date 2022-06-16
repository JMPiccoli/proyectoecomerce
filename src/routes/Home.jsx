import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';


function Home({sumarCarrito} ){

    const onAdd = (count) => {
        Swal.fire({
          title: `Agregaste ${count} item al carrito`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
      }
    
    return (
        <>
            <ItemListContainer onAdd={onAdd} sumarCarrito={sumarCarrito} />
            <ItemDetailContainer />
        </>)
}

export default Home;