import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory, getProductsByOutstanding } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId, outstandingId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            let result
            if (outstandingId) {
                result = await getProductsByOutstanding()
            } else if (categoryId) {
                result = await getProductsByCategory(categoryId)
            } else {
                result = await getProducts()
            }
            setProducts(result)
        }

        fetchData()
    }, [categoryId, outstandingId])

    return (
        <main>
            <h1 style={{ textAlign: 'center', padding: '10px' }}>{greeting}</h1>
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer


