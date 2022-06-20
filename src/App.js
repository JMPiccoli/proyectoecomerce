import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import Test from './components/Test';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter} from 'react-router-dom' ;
import Cart from './components/Cart';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <NavBar2 />
      <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/home" element={ <ItemListContainer /> } />
          <Route path="/categoria/:id" element={ <ItemListContainer /> } />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
