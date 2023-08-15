import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
