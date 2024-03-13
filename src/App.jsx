import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ='/' element={<ItemListContainer greeting = {'Welcome'}/>}/>
          <Route path ='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/outstanding/:outstandingId' element={<ItemListContainer greeting={'Featured Products'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Products'}/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
