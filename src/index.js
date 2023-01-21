import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ToDoList from "./Content";
import AddEvent from "./AddBtn";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.Fragment>
    <ToDoList />
    <AddEvent />
  </React.Fragment>
);
