import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../features/productSlice";

import "./products.scss";
const Product = () => {
  const products = useSelector(getAllProducts);
  return (
    <div className="Products">
      <div className="Products-header">
        <p>WHAT WE OFFER </p>
        <h1>OUR PRODUCTS</h1>
      </div>

      <div className="Products-flex">
        {products.map((el) => {
          return (
            <div className="Products-holder" key={el.id}>
              <img src={el.img} alt={el.title} />
              <div className="Products-info">
                <p className="desc">{el.title}</p>
                <p>{el.dec}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
