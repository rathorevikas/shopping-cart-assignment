import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Products.css";
import axios from "axios";
import Productgrid from "../components/Productgrid/Productgrid";
import Sidemenu from "../components/Sidemenu/Sidemenu";
import { productURL } from "../Api/Api";

const Products = () => {
  const [filterValue, setFilterValue] = useState("");
  const [productData, setproductData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.state != null) {
      setFilterValue(location.state.id);
      location.state = null;
    }
    const fetchData = async () => {
      const res = await axios.get(productURL);
      checkForFilter(res.data);
    };
    fetchData();
  }, [filterValue]);

  const checkForFilter = (data) => {
    if (filterValue != "") {
      let res = data.filter((item) => item.category === filterValue);
      setproductData(res);
    } else {
      setproductData(data);
    }
  };

  return (
    <div className="product_container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={3} className="displayname">
          <Sidemenu filterValue={filterValue} setFilterValue={setFilterValue} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Productgrid productData={productData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
