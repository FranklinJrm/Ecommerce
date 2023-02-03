import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postCartProductThunk } from "../store/slices/cartProducts.slice";
import { getProductThunk } from "../store/slices/product.slice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const products = useSelector((state) => state.products);
  const oneProduct = products.find(
    (productSelect) => productSelect.id === Number(id)
  );
  const relateProducts = products.filter(
    (product) => product.category.id === oneProduct.category?.id
  );

  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    return setQuantity(quantity + 1);
  };
  const subQuantity = () => {
   
      return setQuantity(quantity - 1);
    
  };
  const addToCart = () => {
    const add = {
      id: oneProduct?.id,
      quantity: quantity,
    };
    dispatch(postCartProductThunk(add));
    console.log(add);
  };

  return (
    <div>
      <div className="product_container_details">
        <div className="slide_container">
          <Carousel fade variant="dark" pause={"hover"} touch={true}>
            {oneProduct?.productImgs.map((productImg) => (
              <Carousel.Item onSlid style={{ height: "500px" }}>
                <img
                  className="d-block w-100 h-100"
                  src={productImg}
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="information_product">
          <h4>{oneProduct?.title}</h4>
          <div className="seleprice">
            <div className="price">
              <span>price</span>
              <h4>{oneProduct?.price}</h4>
            </div>
            <div>
              <span>Quantity</span>
              <div className="quantity_function">
                <button onClick={subQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={addQuantity}>+</button>
              </div>
            </div>
          </div>
          <div>
            <button className="btn_add_cart" onClick={addToCart}>
              Add to Cart{" "}
              <i>
                <img
                  src="./image/bxs-cart.svg"
                  className="cart_add_description"
                />
              </i>
            </button>
          </div>
          <div className="description_product">
            <span>{oneProduct?.description}</span>
          </div>
        </div>
      </div>
      <br />
      <div className="products_cards_container">
        {relateProducts?.map((relateProduct, index) => (
          <div className="products_card">
            <div className="product" key={relateProduct.id}>
              <Link to={`/product/${relateProduct.id}`}>
                <div className="img_product">
                  <img src={relateProduct.productImgs[0]} alt="product" />
                </div>
                <div className="info">
                  <h3>{relateProduct.title}</h3>
                  <div className="price">
                    <span>price</span>
                    <h4>{relateProduct.price}</h4>
                  </div>
                </div>
              </Link>
              <button className="btn_cart">
                <img src="./image/bxs-cart.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
