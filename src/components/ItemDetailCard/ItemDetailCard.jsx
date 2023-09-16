import "./ItemDetailCard.css"
import React, { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"

const ItemDetailCard = ({ id, name, img, price, description, category, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
   
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }
        addItem(item, quantity)
        setNotification('success', `Se agregaron ${quantity} productos con el nombre ${name} al carrito`)
    }

    return (
        <div className="prodContainer">
            <div className="divProd">
                <h3 className="nombreProd">{name}</h3>
                <img src={img} alt={name} className="fotos" />
                <h4 className="description">Categoría: {category}</h4>
                <p className="precio">Precio: ${price}</p>
                <p className="description">{description}</p>
                {quantityAdded > 0 ? (
                        <Link to='/cart' className="finCompra">Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />  
                    )}
            </div>
        </div>
    );
}

export default ItemDetailCard;