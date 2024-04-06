import React from "react";
import { Link } from 'react-router-dom'; 
import classes from './Home.module.css';
import "./Home.module.css";

const Home = () => {
    return (
        <div>

            <section>
                <div className={classes.container}>
                    <Link to="/item/8QeauEOKazpyf80jS7yw">
                        <img className={classes.img1} src="https://www.apple.com/v/home/bl/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_medium.jpg" alt="Descripción de la imagen"/>
                    </Link>
                    <h1 className={classes.text1}>Iphone 15 Pro</h1>
                    <h2 className={classes.text2}>Titanium. So strong and lightweight. So Pro.</h2>
                </div>
            </section>
            <section>
                <div className={classes.container}>
                    <Link to="/item/TY27RDO7Y75gyYDX8eg3">
                        <img className={classes.img2} src="https://shop.samsung.com/latin/pub/media/specs/s23fe/pdp-s23fe2.jpg" alt="" />
                    </Link>
                    <h1 className={classes.text3}>Samsung S23</h1>
                    <h2 className={classes.text4}>Plastic. Sleek design, powerful performance. So sleek.</h2>
                </div>
            </section>

        </div>
    );
};

export default Home;
