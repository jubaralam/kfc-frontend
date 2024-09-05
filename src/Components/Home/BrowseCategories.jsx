import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useBashURL } from "../context/BashURL";
import axios from "axios";

const BrowseCategories = () => {
  const bashURL = useBashURL();
  const [categories, setCategories] = useState();

  const getCategories = async (url) => {
    try {
      const data = await axios.get(url);
      console.log(data.data.data);
      setCategories(data.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCategories(`${bashURL}/products/get/category`);
  }, []);

  return (
    <div className="max-w-7xl flex flex-col  items-center mx-auto py-5 px-7">
      <div className="w-cover flex items-end my-5">
        <h2 className="font-extrabold w-[550px]  text-3xl text-black">
          BROWSE CATEGORIES
        </h2>

        {/* <hr className="w-full border-t border-gray-300" /> */}
        <div className="w-cover border-b-2 border-gray-300 overflow-hidden text-white "></div>
      </div>

      <div className="flex flex-wrap  ">
        {categories?.map((item, index) => {
          return <Card key={index} url={item.image} title={item.category} />;
        })}
       
        <Card
          url="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
          title="View All Menu"
        />
      </div>
    </div>
  );
};

export default BrowseCategories;
