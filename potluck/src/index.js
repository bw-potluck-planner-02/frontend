import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

import { rootReducer } from "./Reducers";

// MOCKS+++++++++++++++++
const { worker } = require("./mocks/browser.js");

worker.start();
// MOCKS for testing+++++++++++++++++++

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("STORE", store.getState());

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,

  document.getElementById("root")
);
