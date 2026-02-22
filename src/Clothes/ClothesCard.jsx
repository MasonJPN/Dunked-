import { useState, useContext } from "react"
import { CartContext } from "../CartContext"

const sizes = ["S", "M", "L", "XL", "XXL"]

export default function ClothesCard({ item }) {
  const { addItem } = useContext(CartContext)
  const [jerseySize, setJerseySize] = useState("")

  function addSize() {
    if (!jerseySize) {
      alert("Please Select a Jersey Size")
      return
    }

    addItem({
      ...item,
      size: jerseySize,
      id: `${item.id}-${jerseySize}`,
    })

    setJerseySize("") // Reset after adding
  }

  return (
    <div className="clothes-card-container">
      <div className="card">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.color}</p>
        <p>${item.price}</p>

        <select
          value={jerseySize}
          onChange={(e) => setJerseySize(e.target.value)}
          className="item-add-btn" 
        >
          <option value="">Select Size</option>
          {sizes.map((size) => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>

        <button className="item-add-btn" onClick={addSize}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
