import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UpdatingButton from "./components/UpdatingButton";
import ListPlants from "./components/ListPlants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UpdatingButton />
    <ListPlants />
  </React.StrictMode>
);
