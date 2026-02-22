import {useState, useContext} from "react"
import { CartContext } from "../CartContext"

const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"]

export default function ItemCard({sneaker}){
    const {addItem} = useContext(CartContext)
    const [selectedSize, setSelectedSize] = useState("")

    function addSize(){
        if(!selectedSize){
            alert("Please select a size.")
            return  // ← ADD THIS so it doesn't continue
        }

        addItem({
            ...sneaker,
            size: selectedSize,
            id: `${sneaker.id}-${selectedSize}` 
        })
        
        setSelectedSize("")  // ← Reset after adding (optional)
    }

    return (
        <div className="card">
            <img src={sneaker.img} alt={sneaker.name} />
            <h3>{sneaker.name}</h3>
            <p>{sneaker.color}</p>
            <p>${sneaker.price}</p>

            <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="item-add-btn"
            >
                <option value="">Select Size</option>
                {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                ))}
            </select>

            <button 
                className="item-add-btn" 
                onClick={addSize}  // ← CHANGED THIS
            >
                Add to Cart
            </button>
        </div>
    )
}