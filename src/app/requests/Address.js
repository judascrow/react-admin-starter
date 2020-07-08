import axios from "util/Api";

export const getAllProvices = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`provinces`, config);
};

export const getAllDistricts = (provinceID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  return axios.get(`province/${provinceID}/districts`, config);
};

export const getAllSubDistricts = (provinceID, districtID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  return axios.get(
    `province/${provinceID}/district/${districtID}/subDistricts`,
    config
  );
};

export const getProviceByID = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`provinces/${id}`, config);
};

export const getDistrictByID = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`districts/${id}`, config);
};

export const getSubDistrictByID = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`subdistricts/${id}`, config);
};
