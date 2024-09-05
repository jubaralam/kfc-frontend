import React, { useContext, useState } from "react";
import BashURLContext, { useBashURL } from "./context/BashURL";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  //   const { bashURL } = useContext(BashURLContext);
  const bashURL = useBashURL();
  const [showMessage, setShowMessage] = useState();
  const [formData, setFormData] = useState({
    name: "",
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
    try {
      const res = await axios.post(
        `${bashURL}/user/register`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setShowMessage(res.data.message);
      console.log("Form submitted:", formData, res, bashURL);
    } catch (error) {
      setShowMessage("something went wrong", error.message);
    }

    // Here, you can handle form submission, like sending data to a server.
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Register
        </h2>
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          {showMessage}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

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
          Register
        </button>
        <div className=" my-3 text-center">
          <Link
            to="/login"
            className="bg-blue-500 py-2 px-4  text-white font-bold hover:bg-blue-600 transition-colors rounded-md"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
