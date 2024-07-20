import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const[menu,setmenu]=useState("Home");
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("Home")}className={menu=="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("Menu")}className={menu=="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setmenu("Mobile-app")}className={menu=="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setmenu("Contact Us")}className={menu=="Contact Us"?"active":""}>Contact Us</a>
     </ul>
     <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="navbar-search-icon" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
     </div>
      
    </div>
  )
}

export default Navbar