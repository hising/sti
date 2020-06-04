import "./style.css";
import html from "./test.html";
import { itemStore } from "./stores/ItemStore";

const initApp = async () => {
    // withCallback(onJson);
    // getWithPromise().then(onJson);
    // onJson(await getWithAsync());
    const all = await itemStore.read();
    console.log(all);
};

(async () => {
    let appElement = document.getElementById("app");
    if (appElement) {
        appElement.innerHTML = html;
        await initApp();
    }
})();


