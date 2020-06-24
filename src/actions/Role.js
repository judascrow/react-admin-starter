import { FETCH_ERROR, INIT_URL, GET_ROLES } from "../constants/ActionTypes";
import axios from "util/Api";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

// Get roles
export const getRoles = () => async (dispatch) => {
  try {
    const res = await axios.get(`roles`);

    dispatch({
      type: GET_ROLES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response;

    if (errors) {
      dispatch({
        type: FETCH_ERROR,
        payload: errors.message,
      });
    }
  }
};
