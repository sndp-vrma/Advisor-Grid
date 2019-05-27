import { put, call, takeLatest } from "redux-saga/effects";
import types from "./types";
import actions from "./actions";
import { appActions } from "../../../modules/duck";
import * as api from "./api";

function* loadAdvisorList() {
  try {
    const response = yield call(api.fecthAdvisorList);
    yield put(actions.receiveAdvisorList({ response }));
  } catch (e) {
    console.error("Error encountered : ", e.message);
    yield put(appActions.serviceErrorReceived({ errorMessage: e.message }));
  }
}

function* watchloadAdvisorList() {
  yield takeLatest(types.REQUEST_ADVISOR_LIST, loadAdvisorList);
}

export default [watchloadAdvisorList];
