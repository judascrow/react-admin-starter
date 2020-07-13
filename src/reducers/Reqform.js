import {
  INIT_URL,
  GET_REQFORMS,
  ADD_REQFORM,
  UPDATE_REQFORM,
  DELETE_REQFORM,
} from "../constants/ActionTypes";

const INIT_STATE = {
  initURL: "",
  reqforms: [],
  reqformdata: "",
  loading: true,
  error: {},
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_URL: {
      return { ...state, initURL: payload };
    }
    case GET_REQFORMS: {
      return {
        ...state,
        reqforms: payload.data,
        reqformdata: "",
        loading: false,
      };
    }
    case ADD_REQFORM:
      return {
        ...state,
        reqforms: [...state.reqforms, payload],
        loading: false,
      };
    case UPDATE_REQFORM:
      return {
        ...state,
        reqforms: state.reqforms.map((reqform) =>
          reqform.id === payload.id ? payload : reqform
        ),
        loading: false,
      };
    case DELETE_REQFORM:
      return {
        ...state,
        reqforms: state.reqforms.filter((reqform) => reqform.id !== payload),
        loading: false,
      };
    default:
      return state;
  }
};
