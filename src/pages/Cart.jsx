import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartProduct from '../components/home/cart/CartProduct'
import { getAllProductCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

  const [total, setTotal] = useState(0)

const cart = useSelector(state => state.cart)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProductCart())
}, [])

useEffect(()=>{
  if(cart){
    const result = cart.products.reduce((acc, cv)=>{
      return acc + Number(cv.price) * cv.productsInCart.quantity
    }, 0)
   setTotal(result) 
  }
},[cart])

const handlePurchase = () => {
  const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
  const data = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
  }
  axios.post(URL, data, getConfig())
    .then(res => {
      console.log(res.data)
      dispatch(setCartGlobal(null))
      setTotal(0)
    })
    .catch(err => console.log(err))
}

const navigate = useNavigate()

const handleNavigate = () => {
  navigate("/")
}

  return (
    <>
    <div className='link_return_home'>
    <a className='title_link_return_home' onClick={handleNavigate}>Home</a>
    </div> 
    <h1>Cart</h1>
    <div className='cart'>
      <div className='cart_container'>
        {
          cart?.products.map(product => (
            <CartProduct 
            key={product.id}
            product={product}
            />
          ))
        }        
      </div>
      <h2>Total: {total}</h2>
      <button onClick={handlePurchase}>Buy new</button>
    </div>
    </>
  )
}

export default Cart