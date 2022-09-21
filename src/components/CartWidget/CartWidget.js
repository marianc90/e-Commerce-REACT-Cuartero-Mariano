import CartImage from "../../assets/img/cart.png";
import "./CartWidget.styles.css";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";

const CartWidget = () => {
  const {cart} = useContext(CartContext);
  const [totalCart, setTotalCart] = useState(0)
  
  useEffect(() => {
    let suma = 0;
    cart.forEach(item => { 
      suma += item.quantity
    });
    setTotalCart(suma);

  }, [cart])
  

  return (
    <>
      <NavLink to={'/cart'} className="cartwidget">
        <img className="cartwidget__img" src={CartImage} alt="logo carrito"></img>
        {(cart.length > 0) ? (<h5 className="cartwidget__counter">{totalCart}</h5>):null}
      </NavLink>
    </>
  )
}

export default CartWidget;