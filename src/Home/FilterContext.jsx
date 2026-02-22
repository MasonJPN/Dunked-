import {useState} from "react"
import SneakerData from "./Data"
import ItemCard from "./ItemCard"

export default function FilterContext(){

const [filter, setFilter] = useState(null)
const brands = ["Air Jordan", "Adidas", "Nike", ]

const filteredItems = filter ?
SneakerData.filter(sneaker => sneaker.brand === filter) : SneakerData



    return (
        
        <div> 
            <div className="brand-buttons">
                {brands.map((brand) => {
                    return (
                     <button 
                        key={brand}
                        onClick={() => setFilter(brand) }
                        >
                        {brand}
                      </button>  
                        
                    )
                })}
         </div>
        <div className="card-container">
            {filteredItems.map((sneaker) => (
                <ItemCard key={sneaker.id} sneaker={sneaker} />
            ))}
        </div>

        </div>
    )
}











