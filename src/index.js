import "./style.css";
import html from "./test.html";
import { getWithAsync, getWithPromise, withCallback } from "./async";
import { onJson } from "./helpers";

const initApp = async () => {
    withCallback(onJson);
    getWithPromise().then(onJson);
    onJson(await getWithAsync());
};

(async () => {
    let appElement = document.getElementById("app");
    if (appElement) {
        appElement.innerHTML = html;
        await initApp();
    }
})();


