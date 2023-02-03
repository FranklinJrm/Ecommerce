import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchaseThunk } from "../store/slices/purchases.slice";
import { getProductThunk } from "../store/slices/product.slice";
import { Link } from "react-router-dom";
const Purchases = () => {
  const dispatch = useDispatch();
  const purchase = useSelector((state) => state.purchase);
  const productsImage = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getPurchaseThunk());
    dispatch(getProductThunk());
    formateDate();
  }, []);

  const formateDate = (form) => {
    const date = new Date(form);
    let newForm = date.toLocaleDateString();
    let mouth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octuber",
      "November",
      "December",
    ];
    let formate = null;
    formate = newForm.split("/");
    formate[1] = parseInt(formate[1]);
    for (let i = 0; i < mouth.length; i++) {
      if (formate[1] === i + 1) {
        formate[1] = mouth[i];
      }
    }
    formate = `${formate[1]} ${formate[0]} ${formate[2]}`;
    return formate.toString();
  };

  console.log(purchase);
  console.log("-******-");
  return (
    <div className="Purchase">

      <h4>My Purchase</h4>
      <div>
        {purchase.map((purchaseProduct) => (
          <div className="products_purchase">
            <h5 className="date_product_purchase">{formateDate(purchaseProduct.createdAt)}</h5>
            {console.log('**/*****0')}
            {purchaseProduct.cart.products.map((productPurchases) => (
              <div  className="card_products_purchases">
                {}
                
                
                <Link to={`/product/${productPurchases.id}`}>{productPurchases.title}</Link>
                <h6>{productPurchases.productsInCart.quantity}</h6>
                <h6>{productPurchases.price}$</h6>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
