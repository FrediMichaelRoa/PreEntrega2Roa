import Item from "../Item/Item";
import styles from './ItemList.module.css';

const ItemList = ({ products }) => {
    return (
        <section className={styles.itemList}>
            {
                products?.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </section>
    )
}

export default ItemList;

//??