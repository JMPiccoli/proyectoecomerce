import { createContext, useState } from 'react'

export const CartContext = createContext();

const {Provider} = CartContext;

const MyProvider  = ({children}) => {

    const [cart, setCart] = useState([]);

    // Método Some - ItemDetail - Detecta si el producto existe en el Cart - (booleano)
    const isInCart = (id) => {
      return cart.some(x => x.id === id)
    }

    // ItemDetail - Agrega el producto al Cart. Si existe, aumenta cantidad, sino lo agrega
    const addItem = (item, contador, id) => {
        const newItem = {
            ...item, contador, id,
        }

        if (isInCart(newItem.id)) {
            const productIndex = cart.indexOf(cart.find(x => x.id === newItem.id))
            const auxArray = [...cart]
            auxArray[productIndex].contador += contador
            setCart(auxArray)
        }else {
            setCart([...cart, newItem])
        }
    }

    // Vacía el Cart - Botón
    const emptyCart = () => {
        setCart([])
    }

    // Método Filter - Cart - Devuelve un nuevo array sin el producto eliminado
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    // Método Reduce - CardWidget - Devuelve la cantidad total del state cart
    const getItemQty = () => {
        // return setCart(cart.reduce((acc, x) => acc += x.contador, 0))
        return cart.reduce((acc, x) => acc += x.contador , 0)
    }

    // Método Reduce - Cart - Devuelve el precio total del Cart
    const getItemCart = () => {
    //   return setCart(cart.reduce((acc, x) => acc += x.contador * x.precio, 0))
      return cart.reduce((acc, x) => (acc += x.precio * x.contador) , 0)
    }



    return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemCart}}>{children}</Provider>

}

export default MyProvider
