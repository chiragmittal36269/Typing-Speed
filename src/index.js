import React from "react";
import App from "./App.js";

// import ReactDom from "react-dom";
// ReactDom.render(<App />, document.getElementById("root"));

import ReactDom from "react-dom/client";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
