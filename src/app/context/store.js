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
    regisWork: undefined,
    regisQualification: undefined,
    regisDocument: undefined,
    regisEver: undefined,
    regisEverYear: undefined,
    regisEverPass: undefined,
    regisEverPassNo: undefined,
    regisEverNopass: undefined,
    regisEverNopassDesc: undefined,
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
    workOccupation: undefined,
    workPosition: undefined,
    workPlaces: undefined,
    workRoad: undefined,
    workSubDistrict: undefined,
    workDistrict: undefined,
    workProvince: undefined,
    workZipcode: undefined,
    workTel: undefined,
    workFax: undefined,
    workEmail: undefined,
    bossFirstName: undefined,
    bossLastName: undefined,
    bossNo: undefined,
    bossMoo: undefined,
    bossSoi: undefined,
    bossRoad: undefined,
    bossSubDistrict: undefined,
    bossDistrict: undefined,
    bossProvince: undefined,
    bossZipcode: undefined,
    bossTel: undefined,
    bossFax: undefined,
    bossEmail: undefined,
    workExperience: undefined,
  });

  const [regis, setRegis] = useState({
    regisWork: undefined,
    regisQualification: undefined,
    regisDocument: undefined,
    regisEver: undefined,
    regisEverYear: undefined,
    regisEverPass: undefined,
    regisEverPassNo: undefined,
    regisEverNopass: undefined,
    regisEverNopassDesc: undefined,
  });

  const store = {
    personal: [personal, setPersonal],
    address: [address, setAddress],
    work: [work, setWork],
    regis: [regis, setRegis],
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
