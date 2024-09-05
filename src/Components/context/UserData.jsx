import React, { createContext, useContext, useState } from "react";

const User = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(false);
  const [token, setToken] = useState();
  const updateUserData = (data) => {
    setUserData(data);
  };
  return (
    <User.Provider value={{ userData, updateUserData, token, setToken }}>
      {children}
    </User.Provider>
  );
};

export const useUserData = () => {
  return useContext(User);
};
