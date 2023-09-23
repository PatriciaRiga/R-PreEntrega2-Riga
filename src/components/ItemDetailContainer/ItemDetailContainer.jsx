import "./ItemDetailContainer.css"
import React, { useEffect, useState } from "react"
import ItemDetailCard from "../ItemDetailCard/ItemDetailCard.jsx"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productRef = doc(db, 'products', itemId)        

        getDoc(productRef)
            .then(documentSnapshot => {
                const fields = documentSnapshot.data()
                const productAdapted = { id: documentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <span className="loader"></span>
    }

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetailCard {...product} />
        </div>
    )
}

export default ItemDetailContainer;