import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
