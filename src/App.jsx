import { useState, createContext } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import { NotificationProvider } from './notifications/NotificationService'
import CustomNotification from './notifications/Notification'
import CartView from './components/CartView/CartView'
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer";
import Checkout from './components/Checkout/Checkout'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
              <CustomNotification/>
              <Navbar/>
              <Routes>
                <Route path ='/' element={<Home greeting={'Home'}/>}/>
                <Route path ='/products' element={<ItemListContainer greeting = {'Products'}/>}/>
                <Route path ='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/outstanding/:outstandingId' element={<ItemListContainer greeting={'Featured Products'}/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Product'}/>} /> 
                <Route path='/cart' element={<CartView/>} /> 
                <Route path='/checkout' element={<Checkout/>} /> 
              </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
