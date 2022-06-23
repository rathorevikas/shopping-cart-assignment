import React from "react";
import { addToCart, getTotal } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import "./Productcard.css";



const Productcard = ({ id, name, imageURL, description, price }) => {
  
  const dispatch = useDispatch();

  const buyNowHandler = () => {

    dispatch(addToCart({id,name,imageURL,price}));
    dispatch(getTotal());
  }

  return (
    <div className="productcard_container">
      <div className="productHeading" tabIndex={0}>
        <h3>{name}</h3>
      </div>
      <div className="productImage">
        <img src={imageURL} alt={name} />
      </div>
      <div className="productDescription">
        <p>{description}</p>
      </div>
      <div className="productMRP">
        <div className="productPrice">
          <p>MRP Rs.{price}</p>
        </div>
        <div className="productButton">
          <button onClick={buyNowHandler}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
