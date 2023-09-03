import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom"
import { getProductByCategory } from "../../asyncMock"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <span className="loader"></span>
    }

    return (
        <main>
            <h1 className="bienvenida">{greeting}</h1>
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer;