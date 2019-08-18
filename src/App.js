import React from "react";
import { Provider } from "react-redux";

import App from "./components/App";

import "./App.css";

import store from "./utils/store";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
