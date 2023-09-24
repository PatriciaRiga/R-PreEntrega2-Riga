import './CartWidget.css'
import cart from './assets/shopping-svgrepo-com.svg'
import { useCart } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <>
            <div className="carrito">
                <img src={cart} alt="carrito"/>
                { totalQuantity }               
            </div>
        </>
    )
}

export default CartWidget
