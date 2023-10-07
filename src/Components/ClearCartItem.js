import React from 'react';
import { useCartContext } from './CartContext';
import { NavLink } from 'react-router-dom';


const ClearCartItem = () => {
  const { clearCart } = useCartContext();
  return (
<>
<div className='display-cart-flex'>
<NavLink to='/products'>
<button className='continue-shopping'>CONTINUE SHOPPING</button>
</NavLink>
    <button className='clear-cart-btn' onClick={() => clearCart()}>CLEAR CART</button>
    </div>
</>  )
}

export default ClearCartItem;