import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import classes from './CartView.module.css';

const CartView = () => {
    const { cart, totalQuantity, total, removeItem } = useContext(CartContext);

    return (
        <div className={classes.centerContainer}>
            <div className={classes.container}>
                <div className={`${classes.card} ${classes.cart}`}>
                    <label className={classes.title}>CHECKOUT</label>
                    <div className={classes.steps}>
                        <div className={classes.step}>
                            <div>
                                <span>CART</span>
                                {cart.map(prod => (
                                    <div key={prod.id}>
                                        <p>{prod.name}</p>
                                        <p>Precio: ${prod.price}</p>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div>
                                <span>CANTIDAD</span>
                                <p>{totalQuantity}</p>
                            </div>
                            <hr />
                            <div className={classes.promo}>
                                <span>WIRE TRANSFER</span>
                                <p>BANK</p>
                                <p>bank.sd.lt</p>
                            </div>
                            <hr />
                            <div className={classes.payments}>
                                <span>PAYMENT</span>
                                <div className={classes.details}>$
                                    {total}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.card} ${classes.checkout}`}>
                    <div className={classes.footer}>
                        <label className={classes.price}>$ {total}</label>
                        <Link to='/checkout' className={classes.checkoutbtn}>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartView;
