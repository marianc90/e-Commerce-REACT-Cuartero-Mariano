import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "MyStore - Mariano Cuartero's App";
  }, []);

  return (
    <div className="App">
      <CartProvider >
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a tu tienda online!"/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
