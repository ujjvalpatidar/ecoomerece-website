import React from 'react'
import CartItem from './CartItem';
import ClearCartItem from './ClearCartItem';
import { useCartContext } from './CartContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
const { cart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div>
        <h3 className='empty--cart'>No Cart in Item </h3>
      </div>
    );
  }
  return (
<>
<div className='cart-main-container'>
<div className='cart-headings'>
  <p>Item</p>
  <p>Price</p>
  <p>Quantity</p>
  <p>Total</p>
  <p className='remove-p'>Remove</p>
  </div>
  <hr/>
  <div>
  {/* if(cart !== null) */}
  {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
  })}
  </div>
  <hr/>
</div>
<ClearCartItem/>

</> 
 )
}

export default Cart;