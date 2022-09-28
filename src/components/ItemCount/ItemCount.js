import "./ItemCount.styles.css";

const ItemCount = ({setCounter, counter, setStockState, stockState}) => {

    const decrease = () => {
       return (counter > 1) ? setCounter(counter - 1) : null;
    }
    const increase = () => {
        return (counter < stockState) ? setCounter(counter + 1) : null; 
    };

  return (
    <>
        <div className="counter__box">
        <div onClick={decrease} className="counter__box--increaseDecreaseIcon">-</div>
        <div className="counter__box--counternumber">{counter}</div>
        <div onClick={increase} className="counter__box--increaseDecreaseIcon">+</div>
        </div> 
    </>
  )
}

export default ItemCount