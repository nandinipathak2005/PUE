import React from "react";
import ReactDOM from "react-dom/client";
import PUECalculator from "./app"; // Make sure this matches your App.js file
//import "./index.css"; // Optional: If you have global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PUECalculator />
  </React.StrictMode>
);
