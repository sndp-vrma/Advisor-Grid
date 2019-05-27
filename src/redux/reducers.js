import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import advisorList from "../containers/advisorList/duck";

const rootReducer = combineReducers({
  form: formReducer,
  advisorList
});

export default rootReducer;
