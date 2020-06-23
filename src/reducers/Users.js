import {
  INIT_URL,
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/ActionTypes";

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
      return {
        ...state,
        users: payload.data,
        userdata: "",
        loading: false,
      };
    }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.slug === payload.slug ? payload : user
        ),
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.slug !== payload),
        loading: false,
      };
    default:
      return state;
  }
};
