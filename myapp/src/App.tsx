import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Drawer from "./components/Drawer/Drawer";

type Theme = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [drawerVisible, setDrawerVisible] = useState<boolean>(true);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div className={`drawerStyle ${drawerVisible ? "visible" : "hidden"}`}>
        <Drawer drawerVisible={drawerVisible} />
      </div>
      <div className="dashboard">
        <div className="navbar">
          <div>
            <img
              className="iconMenu"
              src={theme === "light" ? "src/assets/menu-dark.png" : "src/assets/menu-light.png"}
              alt=""
              onClick={toggleDrawer}
            />
            <img className="iconResize"
              src={theme === "light" ? "src/assets/search-dark.png" : "src/assets/search-light.png"}
              alt="" />
          </div>
          <div>
            <img className="icon"
              src={theme === "light" ? "src/assets/light.png" : "src/assets/dark.png"}
              alt="" onClick={toggleTheme} />
            <img className="icon"
              src={theme === "light" ? "src/assets/settings-dark.png" : "src/assets/settings-light.png"}
              alt="" />
            <img className="icon"
              src={theme === "light" ? "src/assets/bell-dark.png" : "src/assets/bell-light.png"}
              alt="" />
            <img className="iconResize"
              src={theme === "light" ? "src/assets/person-dark.png" : "src/assets/person-light.png"}
              alt="" />
          </div>
        </div>
        <div className="contentPart">
          <HomeScreen />
        </div>
      </div>
    </div>
  );
};

export default App;
