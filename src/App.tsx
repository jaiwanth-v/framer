import React from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";
import "./App.scss";
import Logo from "./logo.png";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <img className="logo" src={Logo} alt="logo" height="50px" />
      <p className="logo-text">easy prototyping</p>
      <div className="app-content d-flex justify-content-around p-3">
        <AppProvider>
          <Options />
          <Frame />
          <Customize />
        </AppProvider>
      </div>
    </div>
  );
};

export default App;
