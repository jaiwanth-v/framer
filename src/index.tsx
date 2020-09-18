import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { hydrate, render } from "react-dom";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: "10px",
  transition: transitions.FADE,
};

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>,
    rootElement
  );
} else {
  render(
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>,
    rootElement
  );
}

serviceWorker.unregister();
