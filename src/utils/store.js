// Redux Stuff.
import { createStore, applyMiddleware, compose } from "redux";
// Thunk
import thunk from "redux-thunk";
// Reducers.
import reducers from "../reducers";

const INITIAL_STATE = {};

const enhancers = [];

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(reducers, INITIAL_STATE, composedEnhancers);

export default store;
