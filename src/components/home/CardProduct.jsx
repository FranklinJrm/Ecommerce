import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductCart } from '../../store/slices/cart.slice'
import productsSlice from '../../store/slices/products.slice'
import getConfig from '../../utils/getConfig'

const CardProduct = ({product}) => {

const navigate = useNavigate()
const dispatch = useDispatch()

const handleNavigation = () => {
  navigate(`/product/${product.id}`)
}

const handleAddCart = e => {
  e.stopPropagation()
  const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/cart"
  const data = {
    id: product.id,
    quantity: 1
  }
    axios.post(URL, data, getConfig())
      .then(res =>{
        console.log(res.data)
        dispatch(getAllProductCart())
      })
      .catch(err => console.log(err))
  }

  return (
<article onClick={handleNavigation} className='product'>
      <header className='product__header'>
        <img  className='product__img' src={product.productImgs[0]} alt="" /> 
      </header>
      <div className='product__body'>
        <h3 className='product__title'>{product.title}</h3>
        <div className='product__price'>
          <span className='product__price-label'>Price</span>
          <p className='product__price-number'>{product.price}</p>
        </div>
        <button onClick={handleAddCart} className='product__icon-container'>
          <i className='product_icon bx bxs-cart-alt'></i>
        </button>
      </div>
    </article>

  )
}

export default CardProduct