import {
  FETCH_ERROR,
  INIT_URL,
  GET_USERS,
  ADD_USER,
  SHOW_MESSAGE,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/ActionTypes";
import axios from "util/Api";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

// Get users
export const getUsers = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };

    const res = await axios.get(`users?pageSize=500`, config);

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

export const createUser = (user) => async (dispatch) => {
  return await axios
    .post(`users`, user)
    .then((res) => {
      if (res.status === 201) {
        const data = res.data;
        dispatch({
          type: ADD_USER,
          payload: data.data,
        });
        dispatch({
          type: SHOW_MESSAGE,
          payload: data.message,
        });
        return data;
      }
    })
    .catch((err) => {
      if (err.response) {
        const errors = err.response.data;

        if (errors) {
          dispatch({
            type: FETCH_ERROR,
            // error: errors.message,
            payload: errors.message,
          });
        }
      }

      console.log(err);
    });
};

export const updateUser = (slug, userData) => async (dispatch) => {
  return await axios
    .put(`users/${slug}`, userData)
    .then((res) => {
      if (res.status === 200) {
        const data = res.data;
        dispatch({
          type: UPDATE_USER,
          payload: data.data,
        });
        dispatch({
          type: SHOW_MESSAGE,
          payload: data.message,
        });
        return data;
      }
    })
    .catch((err) => {
      if (err.response) {
        const errors = err.response.data;

        if (errors) {
          dispatch({
            type: FETCH_ERROR,
            // error: errors.message,
            payload: errors.message,
          });
        }
      }

      console.log(err);
    });
};

export const deleteUser = (slug) => async (dispatch) => {
  return await axios
    .delete(`users/${slug}`)
    .then((res) => {
      if (res.status === 204) {
        const data = res.data;
        dispatch({
          type: DELETE_USER,
          payload: slug,
        });
        dispatch({
          type: SHOW_MESSAGE,
          payload: "ลบผู้ใช้งานเรียบร้อยแล้ว",
        });
        return data;
      }
    })
    .catch((err) => {
      if (err.response) {
        const errors = err.response.data;

        if (errors) {
          dispatch({
            type: FETCH_ERROR,
            // error: errors.message,
            payload: errors.message,
          });
        }
      }

      console.log(err);
    });
};
