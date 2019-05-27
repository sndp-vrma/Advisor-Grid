import types from "./types";

export default {
  requestAdvisorList: () => ({ type: types.REQUEST_ADVISOR_LIST }),
  receiveAdvisorList: payload => ({ type: types.RECEIVE_ADVISOR_LIST, payload })
};
