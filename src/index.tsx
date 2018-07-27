import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import React     = require("../node_modules/@types/react");
import {App} from "./components/App";

const store = createStore(tokenizer);

render(
    <Provider store={store}>
        <App compiler="TypeScript" framework="React"/>,
    </Provider>,

    document.getElementById("example"),
);
