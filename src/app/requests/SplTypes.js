import axios from "util/Api";

export const getAllSplTypes = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`spltypes`, config);
};

export const getAllSplSubTypes = (splTypeID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

  return axios.get(`spltypes/${splTypeID}/splsubtypes`, config);
};

export const GetSplTypeByID = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`spltype/${id}`, config);
};

export const GetSplSubTypeByID = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`splsubtype/${id}`, config);
};
