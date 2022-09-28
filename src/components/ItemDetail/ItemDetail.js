import "./ItemDetail.styles.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { CartContext } from '../../context/CartProvider'


const ItemDetail = ({ producto }) => {
  const [counter, setCounter] = useState(1);
  const [stockState, setStockState] = useState(0);
  const { addItem, cart } = useContext(CartContext);


  useEffect(() => {
    if (cart.find((index) => index.id === producto.id)){
      let itemExists = cart.find((index) => index.id === producto.id)
      let newStock = producto.stock - itemExists.quantity 
      setStockState(newStock);
    } else {
    setStockState(producto.stock);
    }
  },[producto.stock]);

  const addToCart = () => {        
      return (counter <= stockState) ? 
      (
      setStockState(stockState - counter), 
      addItem(producto, counter)
      ) 
      : alert("No hay stock!");
    }
 
  return (
    <div className="item-detail__container">
      <div className="item-detail__imagen">
          <img src={producto.image} alt={producto.title} />
      </div>
      <div className="item-detail__contenido">
          <h1>{producto.title}</h1>
          <h4>Precio final: ${producto.price}.-</h4>
          <h5>{producto.description}</h5>
          <h5>Stock disponible: {stockState}</h5>
          <ItemCount setCounter={setCounter} counter={counter} setStockState={setStockState} stockState={stockState} />
          <div>
          <button onClick={addToCart} className="item-detail__contenido--addToCartButton">Agregar al carrito</button>
          {cart.some((item)=> item.id == producto.id) ? <Link to={'/cart'} className="item-detail__contenido--addToCartButton">Ir al carrito</Link> : null}
          </div>
      </div>
    </div>
  )
}

export default ItemDetail