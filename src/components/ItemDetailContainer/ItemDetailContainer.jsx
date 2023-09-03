import React, { useEffect, useState } from "react"
import ItemDetailCard from "../ItemDetailCard/ItemDetailCard.jsx"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([null])

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetailCard {...product} />
        </div>
    )
}

export default ItemDetailContainer;