import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bannerURL } from "../../Api/Api";

const Banner = () => {
  const [bannersData, setBannersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(bannerURL);
      setBannersData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className=" banner_container one_edge_shadow">
      <Carousel
        ariaLabel="Offers"
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        swipeable={true}
      >
        {bannersData.map((item) => (
          <div className="img_container" key={item.id}>
            <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
