import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillYoutube, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";


const Footer = () => {
  return (
<>
    <footer>
        <div className='main-footer-div'>
            <div className='div1'> <p className='pp'>Tech Store </p><br/>
            <p className='pp'>A mobile shopping app is an application that allows customers</p>
            </div>
            <div className='div2'><p className='pp'>Subscribe to get important updates</p>
            <form>
                <input type='email' placeholder='Your E-mail' style={{padding:"0.3 0.3vh"}}/>
            </form><br/>
            <button className='subscribe-btn'>SUBSCRIBE</button>
            </div>
            <div className='div3'><p className='pp'>Follow On</p>
            <AiFillTwitterCircle className='footer-icons'/>
            <AiFillYoutube className='footer-icons'/>
            <AiFillInstagram  className='footer-icons'/>
            </div>
            <div className='div4'><p className='pp'>Call Us</p>
            <p className='pp'>+91 7987551397</p></div>
            <div className='div5'><p className='pp'>@2023 All Rights Reserverd</p></div>
            <div className='div5'></div>
            <div className='div5'><p className='pp'>Privacy Policy
            Terms & Conditions</p></div>
            <div className='div5'><p className='pp'> E-mail 
            ujjvalpatidar72@gmail.com</p></div>
        </div>
    </footer>
</>
  )
}

export default Footer;