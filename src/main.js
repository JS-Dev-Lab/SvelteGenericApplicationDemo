import { viewCreatorFactory } from "./Svelte-UiEngine";
import App from './App.svelte';
import { run } from "../application/app";

const createView = viewCreatorFactory(document.body, App);
run(createView);