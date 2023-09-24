import classes from "./CartWidget.modules.css"
import cart from './assets/shopping-svgrepo-com.svg'
import { useCart } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <>
            {totalQuantity > 0 && (
                <div className={classes.carrito}>
                    <img src={cart} alt="carrito"/>
                    { totalQuantity } 
                </div>
            )}
        </>
    )
}

export default CartWidget
