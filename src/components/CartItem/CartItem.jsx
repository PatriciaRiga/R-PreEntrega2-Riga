import './CartItem.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, img, quantity, price }) => {
  const { removeItem } = useContext(CartContext)

  const handleRemove = () => {
    removeItem(id)
  }

  return (
    <div className="cartItem">
      <div>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <p>Cantidad: {quantity}</p>
        <p className='precioUnidad'>Precio por unidad: ${price}</p>
      </div>
      <div>
        <button className='boton' onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  )
}

// AGREGAR EL SUBTOTAL ABAJO DE PRECIO POR UNIDAD

export default CartItem

