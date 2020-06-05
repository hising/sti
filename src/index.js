import "./style.css";
import html from "./test.html";
import { itemStore } from "./stores/ItemStore";

const initApp = async () => {
    // withCallback(onJson);
    // getWithPromise().then(onJson);
    // onJson(await getWithAsync());
    const all = await itemStore.read();

    //drawItemList(all);
    // const first = await itemStore.read(1);
    // await itemStore.create({ name: "Ich bin einem neue issem"});
    // await itemStore.delete(8);
    /*await itemStore.update(14, {
        name: "Holy Smokessss"
    });*/
    //const item = await itemStore.read(14);
    //const all = await itemStore.read();
    console.log(all);
};

(async () => {
    let appElement = document.getElementById("app");
    if (appElement) {
        appElement.innerHTML = html;
        await initApp();
    }
})();
