import React, { useContext, useState } from 'react'

const CartContext = React.createContext()
const CartUpdate = React.createContext()
const CartRemove = React.createContext()

export function useCart(){
    return useContext(CartContext)
}
export function useCartUpdate(){
    return useContext(CartUpdate)
}
export function useCartRemove(){
    return useContext(CartRemove)
}

export  function Context({children}) {
    const [cart, setCart] = useState([])

    
    const addToCart = (item) => {
        setCart([...cart, { ...item }]);
        console.log(item)
    }

    const removeFromCart =(itemToRemove)=>{
        setCart(
            cart.filter((product)=> product !== itemToRemove)
        )
    }

    return (
            <CartContext.Provider value={cart}>
                <CartUpdate.Provider value={addToCart}>
                    <CartRemove.Provider value={removeFromCart}>
                        {children}
                    </CartRemove.Provider>
                </CartUpdate.Provider>
            </CartContext.Provider>
    )
}

