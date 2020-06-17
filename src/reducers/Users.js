import { INIT_URL, GET_USERS } from "../constants/ActionTypes";

const INIT_STATE = {
  initURL: "",
  users: [],
  userdata: "",
  loading: true,
  error: {},
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_URL: {
      return { ...state, initURL: payload };
    }
    case GET_USERS: {
      console.log(type);
      return {
        ...state,
        users: payload,
        userdata: "",
        loading: false,
      };
    }
    default:
      return state;
  }
};
