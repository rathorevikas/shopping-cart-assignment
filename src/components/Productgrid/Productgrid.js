import React from "react";
import "./Productgrid.css";
import Productcard from "../Productcard/Productcard";
import { Grid } from "@mui/material";

const Productgrid = ({productData}) => {

  return (
    <Grid container className="productGrid_container" spacing={2} pl={1}>
      {productData.map((item) => (
        <Grid className="productItem_container" key={item.id} item xs sm={6} md={4} lg={3}>
          <Productcard
            id={item.id}
            name={item.name}
            imageURL={item.imageURL}
            description={item.description}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Productgrid;
