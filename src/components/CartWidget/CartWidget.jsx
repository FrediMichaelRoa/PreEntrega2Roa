import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext' 

import carrito from './assets/carrito.svg'
import classes from "./CartWidget.module.css"

import { Link } from 'react-router-dom'
    

    const CartWidget = ()=>{

    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to={'/cart'} className={classes.iconContainer}>
            <img className={classes.iconCart} src={carrito} alt="Carrito" />
            <div className={classes.totalQuantity}>{ totalQuantity }</div>
        </Link>
    )
}

export default CartWidget