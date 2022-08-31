import "./ItemCount.styles.css";
import { useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);
    const [stockState, setStockState] = useState(stock);
   
    const decrease = () => {
       return (counter > 0) ? setCounter(counter - 1) : null;
    }
    const increase = () => {
        return (counter < stockState) ? setCounter(counter + 1) : null; 
    };
    const onAdd = () => {
        return (counter <= stockState) ? (setStockState(stockState - counter), setCounter(0)) : null;
    }

  return (
    <div>
        <h3>Nombre de Producto</h3> <h5>Stock: {stockState}</h5>
        <div className="counter__box">
        <div onClick={decrease} className="counter__box--increaseDecreaseIcon">-</div>
        <div className="counter__box--counternumber">{counter}</div>
        <div onClick={increase} className="counter__box--increaseDecreaseIcon">+</div>
        </div>
        <button onClick={onAdd} className="counter__box--onAddButton">Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount