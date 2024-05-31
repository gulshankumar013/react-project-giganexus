import React from 'react'
import "../css/nav.css"
import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosHeartEmpty, IoMdNotificationsOutline } from 'react-icons/io';
import { PiUser } from 'react-icons/pi';



const Nav = ({count} ) => {
  return (
    <>
     <section className='nav-section'>
        <nav className='navbar-img'>
           <div className='logo'></div>
            <ul className='nav-list'>
               <NavLink to={"/"}className={(e)=>{return e.isActive?"blue":" "}}>Home</NavLink>
                <NavLink to={"/about"}className={(e)=>{return e.isActive?"blue":" "}}>About us</NavLink>
                <NavLink to={"/customize"}className={(e)=>{return e.isActive?"blue":" "}}>Customize</NavLink>
                <NavLink to={"/categories"}className={(e)=>{return e.isActive?"blue":" "}}>Categories</NavLink>
                <NavLink to={"/login"}className={(e)=>{return e.isActive?"blue":" "}}>Login</NavLink>
                
            </ul>
                <div className='rightNav'>
                    <input type="text" name='search' id='search' placeholder='Search' />
                    <button className='btn'>Search</button>
                </div>
                <div className='nav-icon'>
                    <NavLink to={'/cart'}className={(e)=>{return e.isActive?"blue":" "}}><IoCartOutline className='nav-icons'/> <sup>{count} </sup></NavLink>
                    <NavLink to={'/profile'}><PiUser className='nav-icons'/></NavLink>
                   <NavLink to={'/wishlist'}><IoIosHeartEmpty className='nav-icons'/></NavLink>
                </div>
        </nav>
        
    </section> 
    </>
       
  )
}

export default Nav
