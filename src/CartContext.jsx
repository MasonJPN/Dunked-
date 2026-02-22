import {useState, createContext} from "react"

 export const CartContext = createContext()


export default function ContextProvider({children}){
 const [cartItems, setCartItems] = useState([])

function addItem(item){
   setCartItems(prev => [...prev, item])
}

 function removeItem(id){
    setCartItems((prev) => prev.filter(item => item.id !== id))
 }

    return(

        <CartContext.Provider value={{cartItems, addItem, removeItem}}>
            {children}
        </CartContext.Provider>

    )
}

