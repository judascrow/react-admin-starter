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

export const userSignUp = ({ name, email, password }) => {
  console.log(name, email, password);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post("auth/register", {
        email: email,
        password: password,
        name: name,
      })
      .then(({ data }) => {
        console.log("data:", data);
        if (data.result) {
          localStorage.setItem(
            "token",
            JSON.stringify(data.token.access_token)
          );
          axios.defaults.headers.common["access-token"] =
            "Bearer " + data.token.access_token;
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_TOKEN_SET, payload: data.token.access_token });
          dispatch({ type: USER_DATA, payload: data.user });
        } else {
          console.log("payload: data.error", data.error);
          dispatch({ type: FETCH_ERROR, payload: "Network Error" });
        }
      })
      .catch(function(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
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
        dispatch({ type: FETCH_ERROR, payload: error.response.data.message });
        console.log("Error****:", error.response.data.message);
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .get("auth/me")
      .then(({ data }) => {
        console.log("userMe: ", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_DATA, payload: data.data.user });
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