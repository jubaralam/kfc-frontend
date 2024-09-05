import React from "react";
import AllRoutes from "./Router/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BashURL from "./Components/context/BashURL";
import { UserDataProvider } from "./Components/context/UserData";

const App = () => {
  return (
    <>
      <UserDataProvider>
        <BashURL>
          <BrowserRouter>
            <Navbar />
            <AllRoutes />
            <Footer />
          </BrowserRouter>
        </BashURL>
      </UserDataProvider>
    </>
  );
};

export default App;
