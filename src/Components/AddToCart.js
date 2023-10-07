import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { AiFillMinusSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCartContext } from './CartContext';

const AddToCart = ({ product }) => {
  const { addedToCart } = useCartContext();

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
  
    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
  
    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };
  
    return (
<>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <div className='Quantity'>
      <button className='iconic' onClick={() => setDecrease()}><AiFillMinusSquare/></button>
      <p className='amount'>{amount}</p>
       <button className='iconic' onClick={() => setIncrease()}><MdAddBox/></button> 
      </div>
      <NavLink to='/Cart' onClick={() => addedToCart(id, color, amount, product)}>
        <button>ADD TO CART</button>
       </NavLink>
</> 
 )
}

export default AddToCart;