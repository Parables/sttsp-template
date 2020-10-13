import './module-workers-polyfill.js'
import { ALL_BOOKS } from './graphql/queries';
import {netFetch, sayHello} from './services'
import App from "./App.svelte";

var app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}

sayHello("Parables")
netFetch(ALL_BOOKS)