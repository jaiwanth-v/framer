import React from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";
import "./App.scss";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <header className="logo">Frame easy</header>
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
