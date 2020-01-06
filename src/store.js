import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../src/reducers";

const middleware = [thunk];
const store = createStore(
  reducers,
  {},

  applyMiddleware(...middleware)
);

export default store;
