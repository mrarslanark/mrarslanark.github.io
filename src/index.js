import React from "react";
import ReactDOM from "react-dom";

// importing bootstrap files
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";

import "./css/index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
