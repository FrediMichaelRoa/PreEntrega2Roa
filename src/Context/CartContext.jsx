import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.error('El producto ya está agregado')
        }
    }

    const isInCart = (id) => {
            return cart.some(prod => prod.id === id)
        }
        
    const clearCart = () => {
            setCart([])
        }

    const removeItem = (id) => {
        const updateCart = cart.filter(prod => prod.id !== id)
        setCart(updateCart)
    }

    const getTotalQuantity = () => {
        let accumulator = 0

        cart.forEach(prod => {
            accumulator += prod.quantity
        })

        return accumulator
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let accumulator = 0

        cart.forEach(prod => {
            accumulator += prod.quantity * prod.price
        })

        return accumulator
    }
    const total = getTotal()
    
    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, total, clearCart, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
