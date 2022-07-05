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
import MyProvider from './components/CartContext';
import { initializeApp } from "firebase/app";
import CheckOut from './components/CheckOut';

function App() {
  initializeApp({
    apiKey: "AIzaSyByjNBUVJmYsvY6HtmHJyrL4BMuRK0a0Ns",
    authDomain: "libreriaonline-b6924.firebaseapp.com",
    projectId: "libreriaonline-b6924",
    storageBucket: "libreriaonline-b6924.appspot.com",
    messagingSenderId: "794749645071",
    appId: "1:794749645071:web:2f8b004cdd1c6c29544e7a"
  });

  return (
    <>
      <BrowserRouter>
      <MyProvider>
          <NavBar />
          {/* <NavBar2 /> */}
          <Routes>
              <Route path="/" element={ <ItemListContainer /> } />
              <Route path="/home" element={ <ItemListContainer /> } />
              <Route path="/categoria/:id" element={ <ItemListContainer /> } />
              <Route path="/item/:id" element={ <ItemDetailContainer /> } />
              <Route path="/cart" element={ <Cart/> } />
              <Route path="/checkout" element={ <CheckOut/> } />              
          </Routes>
      </MyProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
