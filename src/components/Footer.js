import React from 'react'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className="box_contanier">
            <div className="box">
                <h3>Our Branches</h3>
                   <p> Resturant Food Available <br />in 6 India States & 3 Countries.</p>
                   <p>Maharashtra |Gujarat |Delhi <br />|Goa |MP |Chennai</p>
                   <p>Global Presence</p>
                   <p>France |USA |Russia</p>
                  <h3>Timing</h3>
                   <p>Daily 9 am to 11 pm</p>
            </div>
            <div className="box">
                <h3>Quick Links</h3>
                   <a href="#home"><i className="fas fa-arrow-right"></i>Home</a>
                   <a href="#about"><i className="fas fa-arrow-right"></i>About</a>
                   <a href="#menu"><i className="fas fa-arrow-right"></i>Menu</a>
                   <a href="#products"><i className="fas fa-arrow-right"></i>Products</a>
                   <a href="#review"><i className="fas fa-arrow-right"></i>Review</a>
                   <a href="#contact"><i className="fas fa-arrow-right"></i>Contact</a>
                   <a href="#blogs"><i className="fas fa-arrow-right"></i>Blog</a>
            </div>
            <div className="box">
                <h3>Contact Info</h3>
                  <a href="index.html"><i className="fas fa-phone"></i>022-7775-5124</a>
                  <a href="index.html"><i className="fas fa-phone"></i>+91 339-837-4659</a>
                  <a href="index.html"><i className="fas fa-envelope"></i>resturant@gmail.com</a>
                  <a href="index.html"><i className="fas fa-envelope"></i>Chandivali Sakinaka</a>
                  <a href="index.html"><i className="fas fa-envelope"></i>Andheri East</a>
                  <a href="index.html"><i className="fas fa-envelope"></i>Mumbai Maharshtra</a>
                  <a href="index.html"><i className="fas fa-envelope"></i>India</a>
            </div>
            <div className="box">
                <h3>Social Media</h3>
                <a href="https://www.facebook.com/"> <i className="fab fa-facebook-f"></i> Facebook </a>
                <a href="https://www.twitter.com/"> <i className="fab fa-twitter"></i> Twitter </a>
                <a href="https://www.youtube.com/"> <i className="fab fa-youtube"></i> Youtube </a>
                <a href="https://www.instagram.com/"> <i className="fab fa-instagram"></i> Instagram </a>
                <a href="https://www.linkedin.com/"> <i className="fab fa-linkedin"></i> Linkedin </a>
                <a href="https://www.pinterest.com/"> <i className="fab fa-pinterest"></i> Pinterest </a>
                <a href="https://www.snapchat.com/"> <i className="fab fa-snapchat"></i> Snapchat </a>
            </div>
        </div>
        <div className="credit"> Creatd by <span>mr. xyz developer</span> | All rights reserved </div>
      </section> 
    </>
  )
}

export default Footer
