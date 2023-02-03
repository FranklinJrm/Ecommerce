import React from 'react'

const CardPurchase = ({purchase}) => {



  return (
    <article className='card_purchases'>
        <header className='card_purchases_date'>{purchase.updatedAt}</header>
        <div className='card_purchases_info'>
            {
                purchase.cart.products.map(product => (
                    <section className='card_purchases_info_product' key={product.id}>
                        <h3 className='card_purchases_info_product_title'>{product.title}</h3>
                        <div className='card_purchases_info_product_quantity'>{product.productsInCart.quantity}</div>
                        <div className='card_purchases_info_product_price'>{product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase