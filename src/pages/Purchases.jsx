import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPurchase from '../components/purchases/CardPurchase'
import getConfig from '../utils/getConfig'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
      axios.get(URL, getConfig())
        .then(res => setPurchases(res.data.data.purchases))
        .catch(err => console.log(err))
  },[])


  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/")
  }

  return (
    <>
    <div className='link_return_home'>
    <a className='title_link_return_home' onClick={handleNavigate}>Home</a>
    </div>
    <div className='purchases'>
      <h2 className='purchases__title'>My purchases</h2>
      <div className='purchases__container'>
        {
          purchases?.map(purchase => (
            <CardPurchase 
            key = {purchase.id}
            purchase ={purchase}
            />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Purchases