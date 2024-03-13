import carrito from './assets/carrito.svg'
import classes from "./CartWidget.module.css"

const CartWidget = ()=>{
    return(
        <div className={classes.iconContainer}>
            <img className={classes.iconCart} src={carrito} alt="Carrito" />
            <div className={classes.counterCart}>0</div>
        </div>
    )
}

export default CartWidget