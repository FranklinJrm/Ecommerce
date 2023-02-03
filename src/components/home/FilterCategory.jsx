import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'

const FilterCategory = () => {

    const [categories, setCategories] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/products/categories"
            axios.get(URL)
                .then(res => setCategories(res.data.data.categories))
                .catch(err => console.log(err))
    }, [])

    const handleFetchCategory = id => {
        if(id){
            dispatch(getProductsByCategory(id))
        }else {
            dispatch(getAllProducts())
        }
    }

  return (
    <article>
        <h3>Category</h3>
        <ul>
            <li  onClick={() => handleFetchCategory()} >All Products</li>
            {
                categories?.map(category => (
                    <li onClick={() => handleFetchCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory