import React from 'react'
import { BiSolidTruck } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Servises = () => {
  return (
    <>
    <div className='servic-container'>
        <div className='serviseDiv1'>
        <div>
            <BiSolidTruck className='icon'/>
            </div> 
            <div>
            <h6>Super Fast Delivery</h6>
            </div>
        </div>
        <div className='serviseDiv2'>
        <div className='serviseDiv2-1'>
        <div>
            <MdSecurity className='icon'/></div>
           <div><h6>Non-contact Shipping</h6></div>   
        </div>
        <div className='serviseDiv2-1'>
          <div><GiReceiveMoney className='icon'/></div>
           <div><h6>Money Back Guaranteed</h6></div>
          </div>
        </div>
        <div className='serviseDiv1'>
        <div>
          <div><RiSecurePaymentLine className='icon'/></div>
           <div><h6>Super Secure Payment System</h6></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Servises;