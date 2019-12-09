let store = null;

function set(storeValue) {
    if (store !== null) {
        return;
    }
    store = storeValue;
}

function getMain() {
    return store;
}

export {
    getMain,
    set
}