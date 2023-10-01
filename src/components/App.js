import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Container } from "react-bootstrap";
import HomeScreen from "./HomeScreen/HomeScreen";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="home-page">
        <SideBar />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
