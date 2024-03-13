import ItemCount from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

const ItemDetail = ({ name, category, price, img, description, stock }) => {
    return (
        <article className={styles.detail}>
            <div className={styles.card}>
                <h3>{name}</h3>
                <img src={img} />
                <h4>${price}</h4>
                <h5 style={{ padding:'10px', textAlign:'justify'}}>Description: {description}</h5>
                <ItemCount stock={stock}/>
            </div>
        </article>
    );
};

export default ItemDetail
