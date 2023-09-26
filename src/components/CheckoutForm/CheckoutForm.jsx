import './CheckoutForm.css'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const CheckoutForm = ({ createOrder }) => {
    const { cart, totalPrice } = useContext(CartContext)
    const { setNotification } = useNotification()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarEmail, setConfirmarEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (email !== confirmarEmail) {
            setNotification('error', 'Los correos electrónicos no coinciden, volvé a intentar.')
            return
        }

        createOrder({ name, phone, email })
    };

    return (
        <>
            <h1>Detalle de tu compra:</h1>
            <div className='cartContainer'>
                <div className='cart'>
                    {cart.map(item => (
                        <div key={item.id} className='cartItem'>
                            <img src={item.img} alt={item.name} className='fotos' />
                            <div className='cartItemInfo'>
                                <h3>{item.name}</h3>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Subtotal: ${item.quantity * item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='total'>
                    <h3 className='totalCompra'>Total de la compra: ${totalPrice}</h3>
                </div>
            </div>

            <h1>Formulario de contacto</h1>
            <p className='texto'>Completá todos los campos para finalizar tu compra:</p>
            <form className='formulario' onSubmit={handleSubmit}>
                <label className="label">
                    Ingresá tu nombre
                    <input
                        className='input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)} />
                </label>
                <label className="label">
                    Ingresá tu teléfono
                    <input
                        className='input'
                        type='number'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className="label">
                    Ingresá tu email
                    <input
                        className='input'
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </label>
                <label className="label">
                    Confirmá tu email
                    <input
                        className='input'
                        type='email'
                        value={confirmarEmail}
                        onChange={({ target }) => setConfirmarEmail(target.value)} />
                </label>
                <button className='boton'>Generar orden de compra</button>
            </form>
        </>
    )
}

export default CheckoutForm
