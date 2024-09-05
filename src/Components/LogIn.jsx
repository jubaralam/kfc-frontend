import React, { useContext, useState } from "react";
import BashURLContext, { useBashURL } from "./context/BashURL";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "./context/UserData";

const LogIn = () => {
  const navigate = useNavigate();
  const bashURL = useBashURL();

  const { userData, updateUserData, token, setToken } = useUserData();

  const [showMessage, setShowMessage] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify(formData);

    try {
      const res = await axios.post(`${bashURL}/user/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setShowMessage(res.data.message);
      updateUserData(res.data.user);
      setToken(res.data.token);

      navigate("/");

      console.log("Form submitted:", formData, res, bashURL);
    } catch (error) {
      // Only pass a single argument to setShowMessage
      setShowMessage("Something went wrong");
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          LogIn
        </h2>
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          {showMessage}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>
        <div className=" my-3 text-center">
          <Link
            to="/register"
            className="bg-blue-500 py-2 px-4  text-white font-bold hover:bg-blue-600 transition-colors rounded-md"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
