import './Checkout.css'
import { useState } from 'react'
import { useCart } from "../../context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, totalPrice, clearCart } = useCart() 
    const navigate = useNavigate()
    const createOrder = async ({ name, phone, email }) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                totalPrice 
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })
            
            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
    
                const { id: orderId } = await addDoc(orderRef, objOrder)
    
                batch.commit()
                clearCart()
                setOrderId(orderId)
                navigate('/')
                console.log('el numero de orden es: ' + orderId) 
            } else {
                console.error('hay productos fuera de stock') //ESTO QUIERO QUE SEA UNA NOTIFICACION
            }
        } catch (error) {
            console.log('ocurrio un error al obtener los datos' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Generando orden de compra...</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <CheckoutForm createOrder={createOrder}/>
            {orderId && <h1>El ID de tu compra es: {orderId}</h1>}
        </>
    )
}

export default Checkout