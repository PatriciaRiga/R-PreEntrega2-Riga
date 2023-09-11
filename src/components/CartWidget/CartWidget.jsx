import classes from "./CartWidget.module.css"
import cart from './assets/shopping-svgrepo-com.svg'
// import { useContext } from "react"
// import { CartContext } from "../../context/CartContext"
import { useCart } from "../../context/CartContext"
// import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    // const { totalQuantity } = useContext(CartContext)

    return (
        // <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        //     {totalQuantity}
        // </Link>
        <div className={classes.carrito}>
            <img src={cart} alt="carrito"/>
            { totalQuantity } 
        </div>
    )
}
export default CartWidget