import { Grid, Typography } from "@mui/material";
import logo from "../../static/images/logo.png";
import React, { useState } from "react";
import "./Navbar.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useSelector } from "react-redux/es/exports";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";


const Navbar = () => {
  const [renderCart, setRenderCart] = useState(false);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const renderCartHandler = (event) => {
    if((event.type === "click" )|| (event.type === "keypress" && event.key ==="Enter") )
    {
      setRenderCart(!renderCart);
    }

  };

  return (
    <header>
      {renderCart && (
        <Cart renderCart={renderCart} renderCartHandler={renderCartHandler} />
      )}
      <nav>
        <Grid
          container
          spacing={2}
          className="navbar_container nav-edge-shadow"
        >
          <Grid item spacing={3} container>
            <Grid item xs={4} sm={3}>
              <img src={logo} alt="logo" aria-label="logo" onClick={() => navigate("/")} />
            </Grid>
            <Grid item xs={4} sm={6} container>
              <Grid item className="navlink_container display_none">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={3} container direction="column">
              <Grid item className="display_none">
                <Link to="/signin">Signin </Link>
                <Link to="/signup">Register</Link>
              </Grid>
              <Grid item className="cart_container" container>
                <Grid
                  item
                  justifyContent="center"
                  onClick={renderCartHandler}
                  onKeyPress ={renderCartHandler}
                  tabIndex={0}
                  container
                  sx={{width:"fit-content"}}
                >
                  <Grid item className="graybackground">
                    <ShoppingCartRoundedIcon sx={{ color: "var(--darkpink)" }} />
                  </Grid>
                  <Grid item className="graybackground">
                    <Typography aria-label={`${cart.cartTotalQuantity} items in cart`} >{cart.cartTotalQuantity} items</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
};

export default Navbar;
