import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Test from './components/Test';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  const [carrito, setCarrito] = useState(0);
    
  const sumarCarrito = (cantidad) => {
    setCarrito(carrito + cantidad)
  }

  const onAdd = () => {

    
  }


  return (
    <>
      <BrowserRouter>
      <NavBar cantidad={carrito} />
          <Routes>
              <Route path="/" element={ <Home sumarCarrito={ sumarCarrito } /> } />
              <Route path="/articulos" />
              <Route path="/promociones" />
              <Route path="/catalogo" />
              <Route path="/login" />
              <Route path="/contacto" />
          </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
