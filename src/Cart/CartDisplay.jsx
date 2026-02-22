import { useContext } from "react"
import { CartContext } from "../CartContext"
import "./Cart.css"

export default function CartDisplay() {
    const { cartItems, removeItem } = useContext(CartContext)
    const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

    return (
        <div className="cart-container">

            <div className="cart-heading">
                <h3>Product</h3>
                <h3>Size</h3>
                <h3>Price</h3>
                <h3></h3>
            </div>
            
            {cartItems.length === 0 ? (
                <p className="empty-cart-heading">Your Cart Is Empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-product">
                            <img src={item.img} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.color}</p>
                            </div>
                        </div>
                        
                        <p className="cart-size">Size: {item.size}</p>
                        <p className="cart-price">${item.price}</p>
                        
                        <button 
                            className="cart-remove"
                            onClick={() => removeItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}

            <div className="cart-summary">
                <h2>Total: ${total.toFixed(2)}</h2>
                <button className="check-out">Checkout</button>
            </div>
        </div>
    )
}