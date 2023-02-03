import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterInputProductsThunk,
  filterProductsThunk,
  getProductThunk,
} from "../store/slices/product.slice";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputSearchs from "../components/InputSearchs";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    dispatch(getProductThunk());

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/products/categories")
      .then((res) => setCategorys(res.data.data.categories));
  }, []);
  const filterProducts = (e) => {
    dispatch(filterProductsThunk(e.target.value));
  };

  return (
    <div className="home">
      <div className="filter">
        <select name="" id="" onChange={filterProducts} className='select'>
          <option value={getProductThunk}>All</option>

        {categorys.map((category) => (
          <option value={category.id}>{category.name}</option>
          ))}
          </select>
          <i className="arrow"><img src="./image/arrow-down.svg" style={{width:'rem'}}></img></i>
      </div>
      <div className="products_container">
        <InputSearchs />

        <div className="products_cards_container">
          {products?.map((product, index) => (
            <div className="products_card" key={products.id}>
              <div className="product" >
                <Link to={`/product/${product.id}`}>
                  <div className="img_product">
                    <img src={product.productImgs[0]} alt="product" />
                  </div>
                  <div className="info">
                    <h3>{product.title}</h3>
                  <div className="price">

                    <span>price</span>
                    <h4>
                    {product.price}
                    </h4>
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
    </div>
  );
};

export default Home;
