import "./Cart.styles.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom"; 


const Cart = () => {

     const { cart, removeItem, clear } = useContext(CartContext);


    return (
    <div className="cart__container">
    <h1>Carrito</h1>

    { (cart.length > 0) ? 

    (cart.map((item)=>(
        <div key={item.id} className="cart__card">
            <img className="cart__card--img" src={item.image}></img>
            <div className="cart__card--content">
              <h2>{item.title}</h2>
              <p>Precio unit.: $ {item.price}.-</p>
            </div>  
            <div className="cart__card--total">
              <p>Cantidad: {item.quantity}</p>
              <h4>Subtotal: $ {item.quantity*item.price}.-</h4>
            </div>
            <div className="cart__card--eliminar">
              <button onClick={() => removeItem(item)} className="cart__card--eliminar--boton">Eliminar del carrito</button>
            </div>
        </div>      ))) :

        (<><p>El carrito está vacío...🪰</p><Link to="/" className="cart__card--eliminar--boton">Continuar comprando</Link></>)}
    
    { (cart.length > 0) && 
        <div className="cart__card--eliminar">
            <button onClick={clear} className="cart__card--eliminar--boton">Vaciar carrito</button>
        </div>}
    </div>
  )
}

export default Cart