import "./ItemList.css"
import Item from "../Item/Item"


const ItemList = ({ products }) => {
    return (
        <div>
            <div className="containerItems">
                {products.map(product => {
                    return (
                        <Item key={product.id} {...product} />
                    )
                })}
            </div>
        </div>
    )
}

export default ItemList;