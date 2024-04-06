import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
    
        <footer className={classes.footer}>
            <h3>JOIN OUR NEWSLETTER</h3>
            <p>And I received all the News and Exclusive Offers</p>

            <div>        
                <input type="text" placeholder="WRITE YOUR EMAIL" />
                <button className="btn-black">
                    <span className="circle1"></span>
                    <span className="circle2"></span>
                    <span className="circle3"></span>
                    <span className="circle4"></span>
                    <span className="circle5"></span>
                    <span className="text">Suscribe</span>
                </button>       
            </div>

            <div>        
                <a href="">RETURNS &amp; EXCHANGES </a>        
                <a href="./pages/contacts.html">CONTACTS </a>
                <a href="">WHOLESALERS </a>
            </div>
        </footer>
        
    );
}

export default Footer;
