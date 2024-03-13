import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(

        <header className={classes.header}>
            <h1>DIGITALDAZZLE</h1>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to={'/outstanding/FeaturedProducts'} className={classes.enlace} href="./pages/new-arrials.html">Featured Products</Link>
                    </li>
                    <li>
                        <Link to={'/category/Products'} className={classes.enlace} href="./pages/productos.html">Products</Link>
                    </li>
                    
                </ul>
            </nav>
            <CartWidget/>
        </header>  
    )
}


export default Navbar