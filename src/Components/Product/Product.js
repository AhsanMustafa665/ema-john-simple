import React from "react";
import "./Product.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = (props) => {
  const { handleAddToCart } = props;
  const { id, img, name, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <div className="product-info-top">
          <p className="product-name">{name}</p>
          <p className="product-price">Price: ${price}</p>
        </div>
        <div className="product-info-bottom">
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p className="product-ratings">
            <small>Ratings: {ratings} star</small>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add To Cart <BsFillCartPlusFill size={"22px"} />
      </button>
    </div>
  );
};

export default Product;
