export const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

export const onJson = (json) => console.log(json);
export const getClientId = () => {
    let clientID = localStorage && localStorage.getItem("sti_uuid");
    if (!clientID) {
        clientID = uuid();
        localStorage && localStorage.setItem("sti_uuid", clientID);
    }
    return clientID;
};
