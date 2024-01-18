import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import rootReducer from "system/redux";
import { init } from "system/common";
import { createStore } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
init(store);
