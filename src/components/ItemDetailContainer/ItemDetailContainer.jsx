import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Services/Firebase/FirebaseConfig";
import { useAsync } from "../../hooks/useAsync";

const fetchData = async (itemId) => {
    const productDoc = doc(db, 'products', itemId);
    const queryDocumentSnapshot = await getDoc(productDoc);

    if (queryDocumentSnapshot.exists()) {
        const data = queryDocumentSnapshot.data();
        return { id: queryDocumentSnapshot.id, ...data };
    } else {
        throw new Error("No se encontró el producto");
    }
};

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    const { data: productData, loading, error } = useAsync(() => fetchData(itemId), [itemId]);

    useEffect(() => {
        if (productData) {
            setProduct(productData);
        }
    }, [productData]);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '10px' }}>Cargando...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', padding: '10px' }}>Error: {error.message}</div>;
    }

    return (
        <main>
            <h1 style={{ textAlign: 'center', padding: '10px' }}>Detalle del producto</h1>
            {product && <ItemDetail {...product} />}
            {!product && <p style={{ textAlign: 'center' }}>El producto no se encontró.</p>}
        </main>
    );
};

export default ItemDetailContainer;
