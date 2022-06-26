import * as React from "react";
import * as ReactDOM from "react-dom";
import Calculator from "./components/Calculator/Calculator";

function render() {
	ReactDOM.render(<Calculator />, document.querySelector("#root"));
}

render();
