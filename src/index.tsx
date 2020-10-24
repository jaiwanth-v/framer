import React, { lazy, Suspense } from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { render, hydrate } from "react-dom";
import Loader from "./Loader";

const App = lazy(async () => {
  return Promise.all([
    import("./App"),
    await new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: "10px",
  transition: transitions.FADE,
};

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes())
  hydrate(
    <AlertProvider template={AlertTemplate} {...options}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </AlertProvider>,
    rootElement
  );
else
  render(
    <AlertProvider template={AlertTemplate} {...options}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </AlertProvider>,
    rootElement
  );

serviceWorker.unregister();
