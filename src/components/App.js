import React, { useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

const Layout = ({ children }) => {
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
          {children}
        </Container>
      </div>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <HomeScreen />
    </Layout>
  );
}

export default App;
