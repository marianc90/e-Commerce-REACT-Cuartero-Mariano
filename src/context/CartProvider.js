import { createContext, useState, useMemo } from "react";

export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")) ?? []);

    const isInCart = (item) => {
        return cart.find((index) => index.id === item.id);
    };

    const addItem = (item, quantity) => {
        if (isInCart(item)) {
            isInCart(item).quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }


    const removeItem = (item) => {  
        cart.splice(cart.indexOf(item), 1);
        setCart([...cart]);
    }
    const clear = () => {
        setCart([]);
        sessionStorage.removeItem('cart');
    }

    useMemo(() => sessionStorage.setItem("cart", JSON.stringify(cart)), [cart])
   


  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider