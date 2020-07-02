import React, { useState, createContext } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ user, children }) => {
  const [personal, setPersonal] = useState({
    idCard: undefined,
    govCard: undefined,
    cardExpire: user && user.cardExpire ? user.cardExpire : undefined,
    prefixName: undefined,
    firstName: user ? user.firstName : undefined,
    lastName: user ? user.lastName : undefined,
    birthDate: user && user.birthDate ? user.birthDate : null,
    race: undefined,
    nation: undefined,
  });
  const [address, setAddress] = useState({
    provinceID: undefined,
    districtID: undefined,
    subDistrictID: undefined,
  });
  const [work, setWork] = useState({
    aaa: undefined,
  });

  const store = {
    personal: [personal, setPersonal],
    address: [address, setAddress],
    work: [work, setWork],
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};