import React from "react";
const Card = ({ url, title }) => {
  return (
    <div className="card-bg-color w-[270px] mx-3 my-3 rounded-md ">
      <img
        src={url}
        alt="Category Image"
        className="w-full h-[250px] overflow-hidden"
      />
      <h2 className="font-extrabold text-3xl text-center my-4 py-4 ">{title}</h2>
    </div>
  );
};

export default Card;
