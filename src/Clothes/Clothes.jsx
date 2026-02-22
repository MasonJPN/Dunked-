import {useState} from "react"
import ClothesCard from "./ClothesCard";
import ClothesData from "./ClothesData";
import ClothesHeader from "./ClothesHeader"




export default function Clothes(){
    const [filter, setFilter] = useState(null);
    const brands = ["Air Jordan", "Nike", "Adidas"]

const filteredItems = filter ? 
        ClothesData.filter((item) => item.brand === filter ) : ClothesData
    return (
        <>
            <ClothesHeader />
        <div className="brand-buttons">
            <button onClick={() => setFilter(null)}>All</button>
            {brands.map((brand) => {
                return (
                    <button key={brand} onClick={() => setFilter(brand)}
                    >
                    {brand}
                    </button>
                )
            })}
    

        </div>
        <div className="card-container">
            {filteredItems.map((item) => (
                <ClothesCard key={item.id} item={item} />
            ))}

        </div>


        </>
    )

}