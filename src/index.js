import "./style.css";
import html from "./test.html";

let appElement = document.getElementById("app");
if (appElement) {
    appElement.innerHTML = html;
}
