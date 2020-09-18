import React from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";
import "./App.scss";
import Logo from "./logo.png";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <img className="logo" src={Logo} alt="logo" height="50px" />
      <p className="logo-text">easy prototyping</p>
      <div className="app-content">
        <AppProvider>
          <Options />
          <Frame />
          <Customize />
        </AppProvider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
