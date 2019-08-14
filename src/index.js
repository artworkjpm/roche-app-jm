import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
//import store from "./js/store/index";
//import App from "./js/components/App";
//import index from "./js/index";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
serviceWorker.unregister();
