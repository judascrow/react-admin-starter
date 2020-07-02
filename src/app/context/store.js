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
    domicileNo: undefined,
    domicileMoo: undefined,
    domicileSoi: undefined,
    domicileRoad: undefined,
    domicileProvince: undefined,
    domicileDistrict: undefined,
    domicileSubDistrict: undefined,
    domicileZipcode: undefined,
    domicileTel: undefined,
    domicileFax: undefined,
    domicileEmail: undefined,
    addressNo: undefined,
    addressMoo: undefined,
    addressSoi: undefined,
    addressRoad: undefined,
    addressProvince: undefined,
    addressDistrict: undefined,
    addressSubDistrict: undefined,
    addressZipcode: undefined,
    addressTel: undefined,
    addressFax: undefined,
    addressEmail: undefined,

    contactNo: undefined,
    contactMoo: undefined,
    contactSoi: undefined,
    contactRoad: undefined,
    contactProvince: undefined,
    contactDistrict: undefined,
    contactSubDistrict: undefined,
    contactZipcode: undefined,
    contactTel: undefined,
    contactFax: undefined,
    contactEmail: undefined,
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
