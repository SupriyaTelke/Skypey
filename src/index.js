import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import store from "./store";

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
serviceWorker.unregister();

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}
