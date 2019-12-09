import { UiEngine } from "./Svelte-UiEngine";
import App from './App.svelte';
import { MyCountApplication } from "../application/app";

const engine = new UiEngine(document.body, App);
const application = new MyCountApplication(engine);

application.run();