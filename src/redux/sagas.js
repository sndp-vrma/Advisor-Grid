import { fork } from "redux-saga/effects";
import { sagas as advisorListWactherSagas } from "../containers/advisorList/duck";

export default function* rootSaga() {
  for (let saga of advisorListWactherSagas) {
    yield fork(saga);
  }
}
