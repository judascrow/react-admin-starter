import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET,
} from "../constants/ActionTypes";
import axios from "util/Api";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url,
  };
};

export const userSignUp = (data) => {
  const { username, email, password, firstName, lastName } = data;
  return (dispatch) => {
    console.log(username);
    dispatch({ type: FETCH_START });
    axios
      .post("auth/register", {
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      })
      .then(({ data }) => {
        console.log("data:", data);
        if (data) {
          localStorage.setItem("token", "Bearer " + data.token);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + data.token;
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_TOKEN_SET, payload: data.token });
          dispatch({ type: USER_DATA, payload: data.data });
        } else {
          console.log("payload: data.error", data.error);
          dispatch({ type: FETCH_ERROR, payload: "Network Error" });
        }
      })
      .catch(function(error) {
        let err = error;
        if (err.response) {
          err = err.response.data.message;
        } else if (!error.status) {
          err = "network error";
        }
        if (err) {
          dispatch({
            type: FETCH_ERROR,
            payload: err,
          });
        }
      });
  };
};

export const userSignIn = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post("auth/login", {
        username: username,
        password: password,
      })
      .then(({ data }) => {
        console.log("userSignIn: ", data);
        if (data) {
          localStorage.setItem("token", "Bearer " + data.token);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + data.token;
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_TOKEN_SET, payload: data.token });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      })
      .catch(function(error) {
        let err = error;
        if (err.response) {
          err = err.response.data.message;
        } else if (!error.status) {
          err = "network error";
        }
        if (err) {
          dispatch({
            type: FETCH_ERROR,
            payload: err,
          });
        }
      });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_START });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
    // console.log(config);
    await axios
      .get("auth/me", config)
      .then(({ data }) => {
        console.log("userMe: ", data);
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

export const userSignOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: FETCH_SUCCESS });
    dispatch({ type: SIGNOUT_USER_SUCCESS });
  };
};
