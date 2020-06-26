import React, { useState, createContext } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [personal, setPersonal] = useState({
    firstName: undefined,
    lastName: undefined,
    idCard: undefined,
  });
  const [address, setAddress] = useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const store = {
    personal: [personal, setPersonal],
    address: [address, setAddress],
  };
  console.log(store);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
