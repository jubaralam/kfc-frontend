import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayingItems from "./DisplayingItems";
import MenuCategory from "./MenuCategory";

const Categories = () => {
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

export default Categories;
