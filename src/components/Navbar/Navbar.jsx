import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(

        <header className={classes.header}>
            <h1>OUTERWEAR</h1>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <a className={classes.enlace} href="./pages/new-arrials.html">New Arrials</a>
                    </li>
                    <li>
                        <a className={classes.enlace} href="./pages/productos.html">Products</a>
                    </li>
                    
                </ul>
            </nav>
            <CartWidget/>
        </header>  
    )
}


export default Navbar