import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplayingItems = ({ currentCategory, category }) => {
  const [items, setItems] = useState();
  // const [currentCategory, setCurrentCategory] = useState("MATCH DAY COMBOS");
  const [flag, setFlag] = useState(false);
  const getItemsByCategory = async (url) => {
    try {
      const data = await axios.get(url);
      console.log("items", data.data.data);
      setItems(data.data.data);
      setFlag(true);
    } catch (error) {
      setFlag(true);

      console.log(error);
    }
  };

  useEffect(() => {
    getItemsByCategory(
      `http://localhost:8080/api/products/get?category=${currentCategory}`
    );
  }, [currentCategory]);

  if (!flag) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold">{currentCategory}</h1>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 py-5 mx-auto w-full ">
        {items?.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md max-w-[400px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayingItems;
