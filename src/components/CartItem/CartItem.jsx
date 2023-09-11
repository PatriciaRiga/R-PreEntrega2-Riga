import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart-item">
      <div>
        <h3>{name}</h3>
        <p>Cantidad: {quantity}</p>
        <p>Precio por unidad: ${price}</p>
      </div>
      <div>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;

