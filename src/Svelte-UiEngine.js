import { readable } from 'svelte/store';
import { set } from './store';

let storeSetter;

const storeBuilder = (state) => readable(state, function start(set) {
    storeSetter = set;
    return function stop() { };
});


class UiEngine {
    constructor(element, App) {
        this._element = element;
        this._App = App;
    }

    initialRender(state) {
        const { _App: App, _element : target } = this;
        const frozenState = Object.freeze({ ...state });
        const store = storeBuilder(frozenState);
        set(store);
        const app = new App({target});
        return new View(app, frozenState);
    }
}

class View {
    constructor(application, state) {
        this._application = application;
        this._state = state;
    }

    update(updater) {
        const newSate = { ...this._state };
        updater(newSate);
        const state = Object.freeze(newSate);
        storeSetter(state);
        return new View(this._application, state);
    }
}

export {
    UiEngine
};
