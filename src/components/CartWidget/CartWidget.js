import CartImage from "../../assets/img/cart.png";
import "./CartWidget.styles.css";

const CartWidget = () => {
  return (
    <div><img className="cartwidget__img" src={CartImage} alt="logo carrito"></img></div>
  )
}

export default CartWidget;