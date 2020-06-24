import axios from "util/Api";
export const getAllRoles = () => axios.get(`roles`);
