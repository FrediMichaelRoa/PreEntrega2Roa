import { useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";
import { CartContext } from "../../Context/CartContext";
import { useNotification } from "../../notifications/NotificationService";

const ItemDetail = ({ id, name, category, price, img, description, stock }) => {
    const [itemAdded, setItemAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);
    
    const { addItem} = useContext(CartContext)
    const {showNotification} = useNotification()
    const handleOnAdd = (quantity) => {
      // Si count es un número, significa que se seleccionó una cantidad utilizando botones.
      // Si count es una cadena vacía o no es un número, significa que se ingresó manualmente una cantidad.
        
      //Notificacion
        

        const newQuantity = isNaN(quantity) ? parseInt(quantity) : quantity;
    
        const objProductToAdd = {
            id,
            name,
            price,
            quantity: newQuantity
        };
        
        console.log(objProductToAdd);
        showNotification('success', name, newQuantity);
        console.log('agregue al carrito: ', newQuantity);
    
        setQuantity(newQuantity);
        setItemAdded(true);

        addItem(objProductToAdd)
    };

    return (
        <article className={styles.detail}>
            <div className={styles.card}>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <h4>${price}</h4>
                <h5 style={{ padding: '10px', textAlign: 'justify' }}>Description: {description}</h5>
                <ItemCount stock={stock} onAdd={handleOnAdd} initial={1} />
                {itemAdded && (
                    <div style={{ paddingTop:'10px' }}>
                    <a href="/cart" className={styles.checkoutLink}>Finalize Purchase</a>
                    </div>
                )}
            </div>
        </article>
        );
    };
    

export default ItemDetail;
