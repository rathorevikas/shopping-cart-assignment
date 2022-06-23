import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { categoriesURL } from "../../Api/Api";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(categoriesURL);
      setCategoryData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="categories_container">
      {categoryData.map((item) => (
        <Card
          key={item.key}
          id ={item.id}
          name={item.name}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonName={item.key}
        />
      ))}
    </div>
  );
};

export default Categories;
