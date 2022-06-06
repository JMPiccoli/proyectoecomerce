import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Test from './components/Test';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd = () => {

    
  }

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a mi Sitio de Compras Online'} />
      <ItemCount initial={1} max={10} onAdd={onAdd} />
      {/* <Test { 0 }/> */}
    </> 
  );
}

export default App;
