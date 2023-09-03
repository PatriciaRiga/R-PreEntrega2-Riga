import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ name, img, price, id }) => {
    return (
        <div className="prodContainer">
            <div className="divProd">
                <h3 className="nombreProd">{name}</h3>
                <img src={img} alt={name} className="fotos" />
                <p className="precio">Precio: ${price}</p>
                <Link className="detalles" to={`/item/${id}`}><button className="boton">Ver detalle</button></Link>
            </div>
        </div>
    )
}

export default Item;