import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ createOrder }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    // const handleConfirm = (event) => {
    //     event.preventDefault()

    //     const userData = {
    //         name, phone, email
    //     }

    //     onConfirm(userData)
    // }
    
    return (
        <>
            <h1>Formulario de contacto</h1>
            <form onSubmit={() => createOrder({ name, phone, email })}>
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
                <button>Generar orden de compra</button>
                {/* <div className='label'>
                    <button type='submit' className='boton'>Crear orden de compra</button>
                </div> */}
            </form>
        </>
    )
}

export default CheckoutForm