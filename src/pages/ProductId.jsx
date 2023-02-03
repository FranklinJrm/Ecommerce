import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfo from '../components/home/productId/ProductInfo'
import SimilarProduct from '../components/home/productId/SimilarProduct'
import SliderImgs from '../components/home/productId/SliderImgs'

const ProductId = () => {

  const [product, setProduct] = useState()
  
  const {id} = useParams()
  
  useEffect(() => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [id])

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/")
  }
  

  return (
    <div>
      <div className='link_return_home'>
      <a className='title_link_return_home' onClick={handleNavigate}>Home</a>
      </div> 
      <div className='productinfo_slice_container'>
      {
        product &&
        <SliderImgs 
        product ={product}
        />
      }
      <ProductInfo 
      product={product}
      />
      </div>
      <SimilarProduct 
      product={product}
      />
    </div>
  )
}

export default ProductId