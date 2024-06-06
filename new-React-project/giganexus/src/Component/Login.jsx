import React from 'react'
import "../css/login.css"
import { FaAppStoreIos, FaApple, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { BsAndroid2 } from 'react-icons/bs'
import Nav from './Nav'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <Nav/>
    <section className='login-page'>
    <div className='login-logo-slogan'>
            <div className='login-logo'></div>
            <div >
                <h1 className='appname'>GIGANEXUS</h1>
                <p className='appslogan'>The Ultimate Paradise for Technovores</p>
                <form action="#" method='post'>
                <div className='login-form'>
                    <h2>Login or Signup</h2> 
                    <input className='login-input' type="text" id="email" name="email" placeholder="Enter your email"></input>
                    <input className='login-input' type="password" id="password" name="password" placeholder="Enter your password"></input>
                    <button className='login-btn'>Login</button>
                    <Link to={"/signup"}><button className='acc-btn'>Create an Account</button></Link>
                    
                    <h4>or</h4>
            </div> 
            </form>
                <div className='login-socical'>
                    <a className='login-socical-icon' href=""><FaGoogle/></a>
                    <a className='login-socical-icon' href=""><FaFacebook/></a>
                    <a className='login-socical-icon' href=""><FaApple/></a>
                    <a className='login-socical-icon'href=""><FaTwitter/></a>
                </div>
            </div>
            <div className='store-icon'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <a href="">
              <div class="download android">
                      <i class="fa fa-android fa-2x"></i>
                      
                      <span class="p2">Play Store</span>
                </div>
              </a>
                
                    <a href="https://www.apple.com/in/app-store/"><div class="download apple">
                      <i class="fa fa-apple fa-2x"></i>
                      
                      <span class="p2">App Store</span>
                    </div>
 </a>
                      
            </div>  
        </div>
    </section>
    </>
  )
}

export default Login
