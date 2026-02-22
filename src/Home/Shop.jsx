import SneakerData from "../Data"
import ItemCard from "./ItemCard"


export default function Shop(){


    return (

        <div className="card-container">
            {SneakerData.map((sneaker) => {
                return (
                    <ItemCard key={sneaker.id}  sneaker={sneaker}/>
                )
            })}

        </div>
    )
}