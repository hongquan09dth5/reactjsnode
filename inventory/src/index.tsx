import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store, { history } from "./app/store/configureStore";
import reportWebVitals from "./reportWebVitals";
import App from "./app/layout/App";

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <App />
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
};

render();

reportWebVitals(console.log);

