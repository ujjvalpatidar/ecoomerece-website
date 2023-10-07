import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from './CartContext';
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {
const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <>
    <div className='main-nav'>
    <div className='box1'>
    <div className='first-div'>
    <NavLink to="/" className="tech_store">
   <h5><span>TECH</span> STORE</h5>
    </NavLink>
</div>

<div className={menuIcon? "active-navbar-lists" : "navbar-lists"}>
 <ul >
        <li>
        <NavLink to="/" className="navbarlinks"               onClick={() => setMenuIcon(false)}
>
        HOME </NavLink>
        </li>
        <li><NavLink to="/about" className="navbarlinks"               onClick={() => setMenuIcon(false)}
>
        ABOUT </NavLink></li>
        <li><NavLink to="/products" className="navbarlinks"               onClick={() => setMenuIcon(false)}
>
        PRODUCTS </NavLink></li>
        <li><NavLink to="/contact" className="navbarlinks"               onClick={() => setMenuIcon(false)}
>
        CONTACT </NavLink></li>
        <li className='user-name'>{isAuthenticated && 
                <h6>Hi,
                {user.name.toUpperCase()}</h6>
}
                </li>
        { isAuthenticated  ?
 
        <li>   <button className='logout-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li>
    : <li><button onClick={() => loginWithRedirect()} className='login-btn'>Log In</button></li>
        }
        
        <li><NavLink to="/cart" className="navbarlinks1"               onClick={() => setMenuIcon(false)}
>
        <FiShoppingCart style={{marginRight:'20px'}}/>
         <span className='s1'>0</span></NavLink></li>
      </ul>
      </div>

      <div className="mobile-navbar-btn">
<CgMenu
            name="menu-outline"
            className={menuIcon? "hide-menu" : "mobile-nav-icon"}
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className={menuIcon? "mobile-nav-icon-close-outline" : "hide-menu"}
            onClick={() => setMenuIcon(false)}
          />
</div>
    </div>
    </div>
    </>
  )
}


export default Nav;