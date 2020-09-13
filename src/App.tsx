import React from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";

const App: React.FC = () => {
  return (
    <div className="d-flex justify-content-around p-2">
      <AppProvider>
        <Options />
        <Frame />
        <Customize />
      </AppProvider>
    </div>
  );
};

export default App;
