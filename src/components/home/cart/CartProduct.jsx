import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../../store/slices/cart.slice'
import getConfig from '../../../utils/getConfig'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`    
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductCart())
            })
            .catch(err => console.log(err))
    }

  return (
    <article className='cart_product'>
        <h2 className='cart_product_title'>{product.title}</h2>
        <ul>
            <li className='cart_product_quantity'>{product.productsInCart.quantity}</li>
            <li><span>Price </span>{product.price}</li>
        </ul>
        <button onClick={handleDelete} className='cart_product_button'>Delete</button>
    </article>
  )
}

export default CartProduct