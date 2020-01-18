import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Provider from "./store/config/provider";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
