import { createContext, useState, useContext } from "react"
import { NotificationContext } from "../notification/NotificationService"

export const CartContext = createContext({
    cart : []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    const { setNotification } = useContext(NotificationContext)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
        setCart(prev => [...prev, {...item, quantity}])
        setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price * quantity)
        } else {
            setNotification('error', 'Este producto ya fue agregado al carrito') //ESTA NOTIFICACION NO ANDA
        }
    }

    const removeItem = (itemId) => {
        const itemToRemove = cart.find((item) => item.id === itemId)
        if (itemToRemove) {
            setCart((prev) => prev.filter((item) => item.id !== itemId))
            setTotalPrice((prevTotalPrice) => prevTotalPrice - itemToRemove.price * itemToRemove.quantity)
        }
    }

    const clearCart = () => {
        setCart([])
        getTotalQuantity(0);
        setTotalPrice(0);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, totalPrice, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}