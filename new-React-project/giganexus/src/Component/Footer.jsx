import React from 'react'
import "../css/footer.css"
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
const Footer = () => {
  return (
    <>
       <section className='footer-section'>
            <div className='fotter-img'>
                <div className='fotter-carton'></div>
                <div className='footer-deatils-parent'>
                    <div className='footer-details'>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>About</li><br />
                                <a href="">About us</a><br/>
                                <a href="">Our Story</a><br />
                                <a href="">Our Products</a><br />
                                <a href="">Partners</a><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>Help</li><br />
                                <a href="">My Account</a><br />
                                <a href="">FAQ</a><br />
                                <a href="">Pyments</a><br />
                                <a href="">Oder's</a><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>News</li><br />
                                <a href="">Upcoming</a><br />
                                <a href="">Tech News</a><br />
                                <a href="">Trending</a><br />
                                <a href="">Market Place</a><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>Order</li><br />
                                <a href="">Gamming pc</a><br />
                                <a href="">Our Story</a><br />
                                <a href="">Our Products</a><br />
                                <a href="">Partners</a><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>Support</li><br />
                                <a href="">Contact us</a><br />
                                <a href="">Tech Guidence</a><br />
                                <a href="">Track my Oders</a><br />
                                <a href="">Term & Conditions</a><br />
                            </ul>
                        </div>
                            <div className='footer-logodiv'>
                                        <div className='footer-logo'></div>
                                        <div>
                                            <h1 >GIGANEXUS</h1>
                                            <p>The Ultimate Paradise for Technovores</p>
                                        </div>
                            </div>
                            
                    </div>
                            <div className='footer-socical'>
                                <a className='footer-socical-logo' href=""><FaFacebook/></a>
                                <a className='footer-socical-logo' href=""><FiInstagram /></a>
                                <a className='footer-socical-logo' href=""><FaTwitter/></a>
                            </div>
                            <p>Please Show Your Appreciation by hitting the like button below </p>
                            <div style={{marginLeft:"44.5%",}}>
                           <a  href=""><AiFillLike/></a> 
                            </div>

                    </div>
                   
            </div>
            
        </section>
       
    </>
  )
}

export default Footer
