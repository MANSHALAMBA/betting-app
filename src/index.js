import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Store/reducer";
import { BrowserRouter, Route } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
