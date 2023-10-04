import React, { useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Container } from "react-bootstrap";
import HomeScreen from "./HomeScreen/HomeScreen";

function App() {
  const [sideBar, toggleSideBar] = useState(true);
  const handleToggleSideBar = () => {
    toggleSideBar((prev) => !prev);
  };

  return (
    <div className="app">
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="home-page">
        <SideBar sideBar={sideBar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
