import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/rootReducer";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
serviceWorker.unregister();
