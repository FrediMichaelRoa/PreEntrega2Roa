import { Link } from "react-router-dom";
import styles from './item.module.css';

const Item = ({ id, name, category, price, img }) => {
    return (
        <div className={styles.productContainer}>
            <article className={`${styles.article} product-grid`}>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <h4 style={{paddingBottom:'10px', color:'gray'}}>Category: {category}</h4>
                <h4 style={{paddingBottom:'10px'}}>${price}</h4>
                <Link style={{padding:'1px', color:'#2A445B'}} to={`/item/${id}`}>See Detail</Link>
            </article>
        </div>
    );
};

export default Item;
