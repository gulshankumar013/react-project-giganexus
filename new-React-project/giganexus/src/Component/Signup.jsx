import React from 'react'
import "../css/signup.css"
import"@fontsource/rubik"
import { FcGoogle } from 'react-icons/fc'
import { CiFacebook } from 'react-icons/ci'
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import Nav from './Nav'
import Footer from './Footer'

const Signup = () => {
  return (
    <>
    <Nav/>
    <section className='body'>
        <div className='logo-slogan'>
            <div className='signup-logo'></div>
            <div >
                <h3>GIGANEXUS</h3>
                <p>The Ultimate Paradise for Technovores</p>
                <form action="#" method='post'>
                <div className='input-form'>
                    <h2>Create an account</h2> 
                    <input className='sign-input' type="text" id="name" name="name" placeholder='Name' required/>
                    <input className='sign-input' type="email" id="email" name="email" placeholder='Email'required/>
                     <input  className='sign-input' type="password" id="password" name="password" placeholder='Password' required/>
                    <input  className='sign-input' type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder='Mobile ' required/>
                     <input className='sign-input' type="text" id="state" name="state" placeholder='State'required/>
                    <input className='sign-input' type="text" id="country" name="country" placeholder='Country' required/>
                    <input className='sign-btn' type="submit" value="Create"/>
                    <h4>or</h4>
            </div>
                
            </form>
            <div className='signup-socical'>
                <a className='signup-socical-icon' href=""><FaGoogle/> </a>
                <a className='signup-socical-icon' href=""><FaFacebook/></a>
                <a className='signup-socical-icon' href=""><FaApple/></a>
                <a className='signup-socical-icon'href=""><FaTwitter/></a>
                </div>
            </div>
        </div>
            
    </section>
    </>
  )
}

export default Signup
