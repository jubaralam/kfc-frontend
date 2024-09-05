import React, { useState } from "react";
import Categories from "./categories";
import DisplayingItems from "./DisplayingItems";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("MATCH DAY COMBOS");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <MenuCategory setCurrentCategory={setCurrentCategory} />

      {/* Content */}
      <main className="flex-1 p-10 bg-gray-100">
        <DisplayingItems currentCategory={currentCategory} />
      </main>
    </div>
  );
 
  
};

export default Menu;
