import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import CardProduct from '../components/home/CardProduct'
import InputSearch from '../components/home/InputSearch'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import OrderByPrice from '../components/home/OrderByPrice'

const Home = () => {

  const [inputText, setInputText] = useState("")
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if(inputText !== "" && products){
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    }else{
      setFilterByText(products)
    } 
  }, [inputText, products])

    console.log(products)

  

  const callbackFilterPrice = product => {
    return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to 
  }

  return (
    <main className="home">
    <InputSearch 
    setInputText = {setInputText}
    inputText={inputText}
    />
    <FilterPrice 
    setFilterByPrice = {setFilterByPrice}
    />
    <FilterCategory />
    <OrderByPrice />
    <div className='home__containter'>
        {
            filterByText?.filter(callbackFilterPrice).map(product => (
              <CardProduct 
              key={product.id}
              product={product}
              />
            ))
        }
    </div>
</main>
  )
}

export default Home