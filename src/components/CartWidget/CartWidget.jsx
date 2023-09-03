import classes from "./CartWidget.module.css"
import cart from './assets/shopping-svgrepo-com.svg'

const CartWidget = () => {
    return (
        <div className={classes.carrito}>
            <img src={cart} alt="carrito"/>
            0
        </div>
    )
}
export default CartWidget