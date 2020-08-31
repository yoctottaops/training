import { createStore } from "redux";
import yoctottaReducer from "./reducers";

export default createStore(
  yoctottaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
