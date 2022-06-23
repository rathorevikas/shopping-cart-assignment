import React, { useState } from "react";
import "./Cart.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { Modal } from "@mui/material";
import {
  addToCart,
  decreaseCart,
  getTotal,
} from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = ({ renderCart, renderCartHandler }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeButtonHandler = (item) => {
    dispatch(decreaseCart(item));
    dispatch(getTotal());
  };

  const addButtonHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(getTotal());
  };

  return (
    <Modal
      open={renderCart}
      onClose={renderCartHandler}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      {cart.cartTotalQuantity === 0 ? (
        <div
          className="cartContainer"
          style={{ textAlign: "center", backgroundColor: "white" }}
        >
          <div className="cartHeader">
            <div className="heading">
              <h3>MyCart</h3>
            </div>
            <div className="closeButton">
              <CloseIcon
                tabIndex={0}
                sx={{ marginRight: "15px" }}
                onClick={renderCartHandler}
              />
            </div>
          </div>
          <div
            className="cartContent"
            style={{ textAlign: "center", marginTop: "100px" }}
          >
            <h3>No items in your cart</h3>
            <p>Your favourite items are just a click away</p>
          </div>
          <div className="checkoutContainer">
            <div
              className="checkoutButton"
              tabIndex={0}
              onClick={() => {
                navigate("/products");
                renderCartHandler();
              }}
            >
              <p style={{ marginLeft: "40%" }}>Start Shopping</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartContainer">
          <div className="cartHeader">
            <div className="heading">
              <h3>MyCart</h3>
              <h5>({cart.cartTotalQuantity} items)</h5>
            </div>
            <div className="closeButton">
              <CloseIcon
                tabIndex={0}
                sx={{ marginRight: "15px" }}
                onClick={renderCartHandler}
              />
            </div>
          </div>
          <div className="cartContent">
            {cart.cartItems.map((item) => (
              <div className="cartItem" key={item.id}>
                <div className="itemImage">
                  <img src={item.imageURL} alt="" />
                </div>
                <div className="itemInformation">
                  <div className="itemTitle">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="itemButton">
                    <RemoveCircleRoundedIcon
                      tabIndex={0}
                      sx={{ color: "#E52254" }}
                      onClick={() => removeButtonHandler(item)}
                    />
                    <p>{item.itemQuantity}</p>
                    <AddCircleRoundedIcon
                      tabIndex={0}
                      sx={{ color: "#E52254" }}
                      onClick={() => addButtonHandler(item)}
                    />
                    <p>x</p>
                    <p>Rs.{item.price}</p>
                  </div>
                </div>
                <div className="itemPrice">
                  <h4>Rs.{item.itemQuantity * item.price}</h4>
                </div>
              </div>
            ))}

            <div className="cheaperContent">
              <img src="/static/images/lowest-price.png" alt="" />
              <p>You won't find it cheaper anywhere</p>
            </div>
          </div>
          <div className="checkoutContainer">
            <p>Promo code can be applied on payment page</p>
            <div
              className="checkoutButton"
              tabIndex={0}
              onClick={() => {
                navigate("/");
                renderCartHandler();
              }}
            >
              <p>Proceed to Checkout </p>
              <p> Rs.{cart.cartTotalPrice} &gt;</p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
