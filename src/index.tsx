import React, { lazy, Suspense } from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { render, hydrate } from "react-dom";
import Loader from "./Loader";

const App = lazy(async () => {
  return Promise.all([
    import("./App"),
    await new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes())
  hydrate(
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>,
    rootElement
  );
else
  render(
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>,
    rootElement
  );

serviceWorker.unregister();
