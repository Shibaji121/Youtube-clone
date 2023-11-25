import React, { useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PopUp from "./PopUp/PopUp";
import ErrorPage from "./ErrorPage/ErrorPage";
import WatchScreen from "./WatchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import Subscriptions from "./screens/Subscriptions/Subscriptions";

const Layout = ({ children }) => {
  const [sideBar, toggleSideBar] = useState(
    !(children.type.name === "WatchScreen")
  );
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeScreen />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        path: "login",
        element: (
          <PopUp>
            <LoginScreen />
          </PopUp>
        ),
        errorElement: (
          <Layout>
            <ErrorPage />
          </Layout>
        ),
      },
    ],
  },
  {
    path: "watch",
    element: (
      <Layout>
        <WatchScreen />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "results",
    element: (
      <Layout>
        <SearchScreen />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/feed/subscriptions",
    element: (
      <Layout>
        <Subscriptions />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
