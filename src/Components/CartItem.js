import React from 'react'
import { FaTrash } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { AiFillMinusSquare } from "react-icons/ai";
import { useCartContext } from "./CartContext"

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem } = useCartContext();

  return (
    <>
    <div className='cart-display--flex'>
    <div>
      <figure>
      <img src={image} alt={name} className='img-cart'/>
      </figure>
      </div>
      <div className='name-img'>
        <p>{name}</p>
        <div className='color-flex'>
        <p>Color:</p>
        <p className="btnStyle3" style={{backgroundColor:color, color:'transparent'}}>{color}</p>
        </div>
      </div>
      <div className='name-img--cart'>
      <p>₹{price}</p>
      </div>
      <div className='name-img---1cart'>
      <AiFillMinusSquare  className='cart-se-icons'/>
      <p className='amount'>{amount}</p>
       <MdAddBox className='cart-se-icons'/>
      </div>
      <div className='name-img--cart2'>
      ₹{price * amount}
      </div>
      <div className='name-img--cart21'>
        <FaTrash  className="FaTrash" onClick={() => removeItem(id)}/>
      </div>
    </div>
    </>
  )
}

export default CartItem;