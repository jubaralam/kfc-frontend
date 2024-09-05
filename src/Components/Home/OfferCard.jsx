import React from "react";

const OfferCard = () => {
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden 8 shadow-lg m-4  min-w-[240px]">
      <div className="bg-red-700 text-white p-4">
        <h3 className="font-extrabold text-xl">FREE ZINGER WORTH ₹209</h3>
        <img
          src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=51.16"
          alt="Zinger"
          className="w-full my-2"
        />
        <p className="text-center">OFFER VALID ONLY ON 1ST ORDER</p>
      </div>
      <div className="py-8 px-4">
        <h4 className="font-bold text-lg text-black">FREE CHICKEN...</h4>
        <p className="text-gray-700 text-sm">
          1 Pc free Chicken Zinger on a cart value of 499 or above on the first
          order. Only for...
        </p>
        <div className="mt-4">
          <a href="#" className="text-red-700 font-semibold">
            View Details
          </a>
          <button className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded float-right">
            Apply Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
