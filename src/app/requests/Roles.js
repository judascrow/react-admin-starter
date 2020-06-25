import axios from "util/Api";

export const getAllRoles = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  return axios.get(`roles`, config);
};
