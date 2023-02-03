import React, { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts, getCartProductThunk, postPurchasesCart } from '../store/slices/cartProducts.slice';

const Sidebar = ({handleClose,show}) => {

        const dispatch = useDispatch()
        const getCartProducts = useSelector(state => state.cartProducts.data?.cart.products)
        useEffect(()=>{
            dispatch(getCartProductThunk())
        },[])
        console.log(getCartProducts);

    return (
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        {getCartProducts?.map(cartProduct => (
          <Offcanvas.Body>
            <h5>{cartProduct.brand}</h5>
            <h4>{cartProduct.title}</h4>
            <div>
              <span>price</span>
              <h5>{cartProduct.price}</h5>
              <h6>{cartProduct.productsInCart.quantity}</h6>
            </div>

        </Offcanvas.Body>
            ))}
            <button className='btn_add_cart' onClick={()=>dispatch(postPurchasesCart())}>Checkout</button>
      </Offcanvas>
    );
};

export default Sidebar;