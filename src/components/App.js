import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import RecomendVideo from "./RecomendVideo";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="home-page">
        <SideBar />
        <RecomendVideo />
      </div>
    </div>
  );
}

export default App;
