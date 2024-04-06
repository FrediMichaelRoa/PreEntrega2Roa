import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Services/Firebase/FirebaseConfig"
import { useAsync } from "../../hooks/useAsync"

const fetchData = async (categoryId, outstandingId) => {
    let productsCollection = collection(db, 'products');

    if (outstandingId) {
        productsCollection = query(productsCollection, where('outstanding', '==', true));
    } else if (categoryId) {
        productsCollection = query(productsCollection, where('category', '==', categoryId));
    }

    const querySnapshot = await getDocs(productsCollection);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const ItemListContainer = ({ greeting }) => {
    const { categoryId, outstandingId } = useParams()

    const { data: products, loading, error } = useAsync(() => fetchData(categoryId, outstandingId), [categoryId, outstandingId]);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '10px' }}>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: '10px' }}>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
