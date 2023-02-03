import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/home/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRout from './pages/ProtectedRout'
import Purchases from './pages/Purchases'
import "./components/home/styles/cardProduct.css"
import "./pages/styles/home.css"
import "./components/home/productId/styles/productInfo.css"
import "./components/home/productId/styles/slider.css"
import "./components/home/productId/styles/similarProduct.css"
import "./components/home/styles/inputSearch.css"
import "./components/purchases/cardPurchase.css"
import "./pages/styles/login.css"
import "./pages/styles/cart.css"


function App() {

  // useEffect(() => {
  //   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users"
  //   const data = {
  //     firstName: 'Walter',
  //     lastName: 'Daza',
  //     email: 'hardnekeyns@email.com',
  //     password: '123456',
  //     phone: '3102806291',
  //     role: 'admin'
  //   }
  //     axios.post(URL, data)
  //       .then(res => console.log(res.data))
  //       .catch(err => console.log(err))
  // },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductId />}/>
        <Route path='/login' element={<LoginScreen />} />

        <Route  element={<ProtectedRout/>}> 
          <Route path='/cart' element={<Cart />}/>
          <Route path='/purchases' element={<Purchases />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
