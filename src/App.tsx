import React, { useEffect, useState } from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { Fade } from "@material-ui/core";

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 400);
  }, []);
  return (
    <Fade in={show}>
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
    </Fade>
  );
};

export default App;
