import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='volver'>Volver a Productos</Link>
            </div>
        )
    }

    return (

        <div className='cartContainer'>
            <div className='cart'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            </div>
            <div className='total'>
                <h3 className='totalCompra'>Total de la compra: ${totalPrice}</h3>
                <button onClick={() => clearCart()} className="limpiar">Limpiar carrito</button>
                <Link to='/checkout' className='checkout'>Checkout</Link>
            </div>
        </div>        
    )
}

export default Cart

