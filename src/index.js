import "./style.css";
import html from "./test.html";

let appElement = document.getElementById("app");
if (appElement) {
    appElement.innerHTML = html;

    // With callback
    /*
    withCallback((content) => {
        console.log(content);
    });

    // With Promise
    callbackPromise().then((json) => {
        console.log("Yay, the JSON");
    });

    // Async/await
    (async () => {
        let json = await usePromiseAsAsync();
        console.log("Yay, the JSON again");
    })();

     */
}
