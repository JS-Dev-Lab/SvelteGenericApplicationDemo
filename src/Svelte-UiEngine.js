import { readable } from 'svelte/store';
import { set } from './store';

let storeSetter;

const storeBuilder = (state) => readable(state, function start(set) {
    storeSetter = set;
    return function stop() { };
});

const constStoreBuilder = (state) => readable(state, function start() {
    return function stop() { };
});

function viewCreatorFactory(target, App) {
    return ({ state, commands }) => {
        const frozenState = Object.freeze({ ...state });
        const store = storeBuilder(frozenState);
        const commandsStore = constStoreBuilder(commands);
        set({ state: store, commands: commandsStore });
        const app = new App({ target });
        return new View(app, frozenState, commands);
    }
}

class View {
    constructor(application, state) {
        this._application = application;
        this._state = state;
    }

    update(updater) {
        const newState = { ...this._state };
        updater(newState);
        this.fullUpdate(newState);
    }

    get state() {
        return this._state;
    }

    fullUpdate(newState) {
        this._state = Object.freeze(newState);
        storeSetter(this._state);
    }
}

export {
    viewCreatorFactory
};
