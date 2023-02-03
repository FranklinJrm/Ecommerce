import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'

const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleascending = () => {
        dispatch(ascendingProducts())
    }
    const handledescending = () => {
        dispatch(descendingProducts())
    }

  return (
    <div>
        <h3>Order</h3>
        <button onClick={handleascending}>Order Upward</button>
        <button onClick={handledescending}>Order Falling</button>
    </div>
  )
}

export default OrderByPrice