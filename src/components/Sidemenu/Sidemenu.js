import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sidemenu.css";
import { categoriesURL } from "../../Api/Api";

const Sidemenu = ({ filterValue, setFilterValue }) => {
  const [categoryData, setCategoryData] = useState([]);

  const handleChange = (event) => {
    if (filterValue !== event.target.value) {
      setFilterValue(event.target.value);
    } else {
      setFilterValue("");
    }
  };

  const clickHandler = (event) => {
    if (filterValue !== event.target.id) {
      setFilterValue(event.target.id);
    } else {
      setFilterValue("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(categoriesURL);
      setCategoryData(res.data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div className="sidemenuSelect">
        <select
          name="categories"
          onChange={handleChange}
          defaultValue={"Categories"}
        >
          <option value="Categories" disabled>
            Categories
          </option>
          {categoryData.map((item) => (
            <option key={item.id} value={item.id} id={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="sidemenu_container">
        {categoryData.map((item) => (
          <button
            key={item.id}
            tabIndex={ filterValue && filterValue !== item.id ? -1 : 0}
            className={filterValue === item.id ? "focusButton" : ""}
            name={item.name}
            id={item.id}
            onClick={clickHandler}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidemenu;
