import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        return cart.find((index) => index.item.id === item.id);
    };

    const addItem = (item, quantity) => {
        if (isInCart(item)) {
            isInCart(item).quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {item, quantity}]);
        }
    }
    const removeItem = (item) => {  
        cart.splice(cart.indexOf(item.id), 1);
        setCart([...cart]);
    }
    const clear = () => {
        setCart([]);
    }


  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider