import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import RecomendVideo from "../components/Video/RecomendVideo";
import Chips from "../components/CategoriesBar/Chips";

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
