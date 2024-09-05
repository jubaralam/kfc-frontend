import React from "react";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ text, redirect }) => {
  const navigate = useNavigate();
  const redirectToURL = () => {
    navigate(redirect);
  };
  return (
    <div onClick={redirectToURL}>
      <button className="bg-red-600 text-white py-3 px-9 rounded-full hover:bg-red-700 m-2">
        {text}
      </button>
    </div>
  );
};

export default ActionButton;
