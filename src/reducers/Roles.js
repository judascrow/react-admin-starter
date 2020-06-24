import { INIT_URL, GET_ROLES } from "../constants/ActionTypes";

const INIT_STATE = {
  initURL: "",
  roles: [],
  loading: true,
  error: {},
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_URL: {
      return { ...state, initURL: payload };
    }
    case GET_ROLES: {
      return {
        ...state,
        roles: payload.data,
        loading: false,
      };
    }
    default:
      return state;
  }
};
