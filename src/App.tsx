import React from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";

const App: React.FC = () => {
  return (
    <div className="d-flex justify-content-around">
      <Options />
      <Frame />
      <Customize />
    </div>
  );
};

export default App;
