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

  return axios.get(`provinces/${provinceID}/districts`, config);
};

export const getAllSubDistricts = (provinceID, districtID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  return axios.get(
    `provinces/${provinceID}/districts/${districtID}/subDistricts`,
    config
  );
};
