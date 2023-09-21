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
        <img src={img} alt={name} className='fotos' />
        <p>Cantidad: {quantity}</p>
        <p className='precioUnidad'>Precio por unidad: ${price}</p>
        <p className='subtotal'>Subtotal: ${price*quantity}</p>
      </div>
      <div>
        <button className='boton' onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem;
