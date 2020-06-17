import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  USER_DATA,
  GET_USERS,
} from "../constants/ActionTypes";
import axios from "util/Api";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

export const getUsersOld = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .get("users")
      .then(({ data }) => {
        console.log("users: ", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_DATA, payload: data.data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
  };
};

// Get users
export const getUsers = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: localStorage.getItem("token"),
      },
    };

    const res = await axios.get(`users?spageSize=500`, config);

    dispatch({
      type: GET_USERS,
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
