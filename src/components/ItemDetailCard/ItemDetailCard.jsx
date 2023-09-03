import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailCard.css";

const ItemDetailCard = ({ name, img, price, description, category, stock }) => {

    return (

        <div className="prodContainer">
            <div className="divProd">
                <h3 className="nombreProd">{name}</h3>
                <img src={img} alt={name} className="fotos" />
                <h4 className="description">Categoría: {category}</h4>
                <p className="precio">Precio: ${price}</p>
                <p className="description">{description}</p>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada " + quantity)} />
            </div>
        </div>
    );
}

export default ItemDetailCard;