import React, { createContext, useContext } from "react";

const BashURLContext = createContext();

const BashURLProvider = ({ children }) => {
  // const bashURL = "http://localhost:8080/api";
  const bashURL = "https://kfc-backend-g0p5.onrender.com/api";

  return (
    <BashURLContext.Provider value={bashURL}>
      {children}
    </BashURLContext.Provider>
  );
};

export const useBashURL = () => {
  return useContext(BashURLContext);
};

export default BashURLProvider;
