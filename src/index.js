import { callbackPromise, usePromiseAsAsync, withCallback } from "./async";

let appElement = document.getElementById("app");
if (appElement) {
    appElement.innerHTML = "It works, now you can make changes in src/index.js";

    // With callback
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
}
