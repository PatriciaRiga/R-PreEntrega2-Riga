import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className="controles">
                <button className="boton" onClick={decrement}>-</button>
                <h4 className="cantidad">{quantity}</h4>
                <button className="boton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="botonAgregar" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )

}

export default ItemCount;