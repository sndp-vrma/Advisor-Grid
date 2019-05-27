import types from "./types";
import { appActionTypes } from "../../../modules/duck";

const defaultState = {
  items: [],
  loading: false
};

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_ADVISOR_LIST:
      return {
        ...prevState,
        loading: true
      };
    case types.RECEIVE_ADVISOR_LIST:
      return {
        ...prevState,
        loading: false,
        items: action.payload.response
      };
    case appActionTypes.SERVICE_CALL_FAILED:
      return {
        ...prevState,
        loading: false
      };
    default:
      return prevState;
  }
};
