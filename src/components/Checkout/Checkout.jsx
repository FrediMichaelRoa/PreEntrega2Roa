import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp} from "firebase/firestore"
import { db } from "../../Services/Firebase/FirebaseConfig"

import classes from "../Checkout/Checkout.module.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, clearCart } = useContext(CartContext)

    const createOrder = async (orderData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: orderData,
                items: cart,
                total: calculateTotal(cart),
                date: Timestamp.fromDate(new Date())
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const docRef = await addDoc(orderCollection, objOrder)
                
                clearCart()
                setOrderId(docRef.id)
            } else {
                console.error('Hay productos que no tienen stock disponible')
            }
        } catch (error) {
            console.error('Hubo un error en la generación de la orden:', error)
        } finally {
            setLoading(false)
        }
    }

    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = e.target.elements.nombre.value;
        const apellido = e.target.elements.apellido.value;
        const direccion = e.target.elements.direccion.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;

        // Verificar que todos los campos estén completos
        if (nombre && apellido && direccion && email && phone) {
            // Llamar a createOrder con los datos del formulario
            createOrder({ nombre, apellido, direccion, email, phone });
        } else {
            console.error('Por favor, complete todos los campos del formulario');
        }
    };

    return  (
        <div>
            <h1 style={{display:'flex', justifyContent:'center', paddingTop:'5%'}}>Checkout</h1>
                {loading && <p style={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }} className={classes.checkout}>Su orden está siendo generada...</p>}

                {orderId && <p style={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }} className={classes.checkout}>El ID de su orden es: {orderId}</p>}
            <div className={classes.formcontainer}>
                
                <form className={classes.form} onSubmit={handleSubmit}>
                    <label htmlFor="nombre"></label>
                    <input type="text" id="nombre" placeholder="nombre" required />
                    <br />
                    <label htmlFor="apellido"></label>
                    <input type="text" id="apellido" placeholder="apellido" required />
                    <br />
                    <label htmlFor="direccion"></label>
                    <input type="text" id="direccion" placeholder="direccion" required />
                    <br />
                    <label ></label>
                    <input type="email" id="email" placeholder="email" required />
                    <br />
                    <label htmlFor="phone"></label>
                    <input type="tel" id="phone" placeholder="phone" required />
                    <br />
                    <button type="submit" onClick={createOrder}>Generar orden de compra</button>
                </form>
                {/* {loading && <p className={classes.checkout}>Su orden está siendo generada...</p>}
                {orderId && <p className={classes.checkout}>El ID de su orden es: {orderId}</p>} */}
            </div>
        </div>
        
    );
}

export default Checkout;
