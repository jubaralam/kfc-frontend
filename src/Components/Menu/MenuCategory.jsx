import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { menu } from '../../data';

const MenuCategory = ({setCurrentCategory}) => {
    
    const [categories, setCategories] = useState();
    // const [currentCategory, setCurrentCategory] = useState("MATCH DAY COMBOS");
    const [flag, setFlag] = useState(false);
  
    const getCategory = async (url) => {
      try {
        const data = await axios.get(url);
        console.log("items", data.data.data);
        setCategories(data.data.data);
        setFlag(true);
      } catch (error) {
        setFlag(true);
        console.log(error);
      }
    };
  
    useEffect(() => {
      getCategory(`http://localhost:8080/api/products/get/category`);
    }, []);
  
    if (!flag) {
      return <h2>Loading...</h2>;
    }
    const handleChangeCategoryMenu = (e) => {
      console.log(e.target.value);
      setCurrentCategory(e.target.innerText);
      console.log(e.target.innerText);
    };
  return (
    <aside className="w-64 bg-white shadow-md h-screen  sticky top-12 hide-menu">
    <div className="p-6 text-2xl font-bold text-red-600">KFC MENU

        {/* <img src={menu} alt="menu" /> */}
    </div>
    <nav>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="py-2 px-6 text-gray-800 hover:bg-gray-100 cursor-pointer"
            onClick={handleChangeCategoryMenu}
            value={category.category}
          >
            {category.category}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
  )
}

export default MenuCategory