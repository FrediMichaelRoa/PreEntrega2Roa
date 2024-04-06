import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [showHome, setShowHome] = useState(true);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/' || currentPath.includes('/product/')) {
            setShowHome(false);
        } else {
            setShowHome(true);
        }
    }, [location]);

    return(
        <header className={classes.header}>
            <Link to='/' className={classes.logo}>DIGITALDAZZLE</Link>
            <nav className={classes.nav}>
                <ul>
                    {showHome && (
                        <li>
                            <Link to={'/'} className={classes.enlace}>Home</Link>
                        </li>
                    )}
                    <li>
                        <Link to={'/products'} className={classes.enlace}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/outstanding/FeaturedProducts'} className={classes.enlace}>Outstanding</Link>
                    </li>
                    <li>
                        <Link to={'/category/Phone'} className={classes.enlace} >Phone</Link>
                    </li>
                    <li>
                        <Link to={'/category/Tablet'} className={classes.enlace} >Tablet</Link>
                    </li>
                    
                </ul>
            </nav>
            <CartWidget/>
        </header>  
    );
};

export default Navbar;
