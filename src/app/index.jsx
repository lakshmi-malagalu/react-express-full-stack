import { store } from './store';
import ReactDOM from "react-dom";
import React from "react";
import { Main } from './components/Main';

console.log(store.getState());
console.log("Hello World!!");

ReactDOM.render(<Main />,document.getElementById("app"));