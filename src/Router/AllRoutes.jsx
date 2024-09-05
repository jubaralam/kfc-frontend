import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Deals from "../Components/Deals/Deals";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/deals" element={<Deals />}></Route>
    </Routes>
  );
};

export default AllRoutes;
