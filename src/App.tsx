import React, { useEffect } from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { Scale } from "./Scale";

const App: React.FC = () => {
  useEffect(() => {
    Scale();
  });
  return (
    <div className="fadein">
      <div className="wrapper">
        <header className="logo fadein">frame easy</header>
        <p className="logo-text fadein">easy prototyping</p>
        <div className="app-content">
          <AppProvider>
            <Options />
            <Frame />
            <Customize />
          </AppProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
