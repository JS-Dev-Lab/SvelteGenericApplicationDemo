let store = null;
let commandsStore = null;

function set({state, commands}) {
    if (store !== null) {
        return;
    }
    store = state;
    commandsStore = commands;
}

function getState() {
    return store;
}

function getCommands() {
    return commandsStore;
}

export {
    getState,
    getCommands,
    set
}