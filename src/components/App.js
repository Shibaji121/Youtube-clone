import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import RecomendVideo from "./RecomendVideo";
import Chips from "./Chips";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="home-page">
        <SideBar />
        <div className="video-section">
          <Chips />
          <RecomendVideo />
        </div>
      </div>
    </div>
  );
}

export default App;
