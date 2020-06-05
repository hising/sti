import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

let appElement = document.getElementById("app");
if (appElement) {
    // TODO: Boot our App Component and render it to the DOM
    ReactDOM.render(<App />, appElement);
}
