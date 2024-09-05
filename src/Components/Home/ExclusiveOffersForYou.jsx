import React from "react";
import OfferCard from "./OfferCard";
import { rightArrow } from "../../data";
const ExclusiveOffersForYou = () => {
  return (
    <div className=" bg-gray-900 text-white py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex  justify-between items-center my-10">
          <h2 className="font-extrabold text-3xl my-4 py-4 ">
            EXCLUSIVE OFFERS FOR YOU
          </h2>
          <div className="flex items-center cursor-pointer">
            <p>View All Deals</p>
            <img src={rightArrow} alt="right arrow" className="w-10 p-2 " />
          </div>
        </div>

        <div className="bg-gray-900 flex justify-center max-w-7xl overflow-auto ">
          <div className=" flex w-[70px] items-center relative left-[100px] ">
            <img
              src={rightArrow}
              alt=" left arrow"
              className="w-[100%] h-[50px] bg-gray-950 p-2 rounded-full rotate-180 cursor-pointer"
            />
          </div>
         
          <div className="flex space-x-4">
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
         
          
          </div>
          <div className="z-20 flex w-[70px] items-center relative right-[100px]   ">
            <img
              src={rightArrow}
              alt=" left arrow"
              className="w-[100%] h-[50px] bg-gray-950 p-2 rounded-full  cursor-pointer    "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffersForYou;
