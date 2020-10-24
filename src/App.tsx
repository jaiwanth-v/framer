import React, { useEffect, useState } from "react";
import Customize from "./components/Customize/Customize";
import Frame from "./components/Frame/Frame";
import Options from "./components/Options/Options";
import { AppProvider } from "./Context/App.context";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Loader, { docReady } from "./Loader";

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    docReady(() =>
      setTimeout(() => {
        setLoading(false);
      }, 800)
    );
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="fadein">
      <div className="wrapper">
        <header className="logo fadein">Frame easy</header>
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
