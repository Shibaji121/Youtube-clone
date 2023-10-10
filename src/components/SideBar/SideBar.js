import React, { useState, useCallback } from "react";
import "../SideBar/SideBar.css";
import SideBarRow from "./SideBarRow";
import {
  ContentCutOutlined,
  HistoryOutlined,
  HomeOutlined,
  KeyboardArrowDownOutlined,
  LogoutOutlined,
  SmartDisplayOutlined,
  SubscriptionsOutlined,
  VerticalAlignBottomOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/authAction";

function SideBar({ sideBar, handleToggleSideBar }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = useCallback(
    (title) => {
      if (title === "Log Out") {
        dispatch(logOut());
        setSelectedItem("Home");
        return;
      }
      setSelectedItem(title);
    },
    [dispatch]
  );

  return (
    <div
      className={sideBar ? "side-bar" : "side-bar no-sideBar"}
      onClick={() => handleToggleSideBar(false)}
    >
      <SideBarRow
        Icon={HomeOutlined}
        title={"Home"}
        selected={selectedItem === "Home"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={WhatshotOutlined}
        title={"Trending"}
        selected={selectedItem === "Trending"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={SubscriptionsOutlined}
        title={"Subscriptions"}
        selected={selectedItem === "Subscriptions"}
        onItemClick={handleItemClick}
      />
      <hr />
      <SideBarRow
        Icon={VideoLibraryOutlined}
        title={"Library"}
        selected={selectedItem === "Library"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={HistoryOutlined}
        title={"History"}
        selected={selectedItem === "History"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={SmartDisplayOutlined}
        title={"Your videos"}
        selected={selectedItem === "Your videos"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={WatchLaterOutlined}
        title={"Watch later"}
        selected={selectedItem === "Watch later"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={VerticalAlignBottomOutlined}
        title={"Downloads"}
        selected={selectedItem === "Downloads"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={ContentCutOutlined}
        title={"Your clips"}
        selected={selectedItem === "Your clips"}
        onItemClick={handleItemClick}
      />
      <SideBarRow
        Icon={KeyboardArrowDownOutlined}
        title={"Show more"}
        selected={selectedItem === "Show more"}
        onItemClick={handleItemClick}
      />
      {user && (
        <SideBarRow
          Icon={LogoutOutlined}
          title={"Log Out"}
          selected={selectedItem === "Log Out"}
          onItemClick={handleItemClick}
        />
      )}
    </div>
  );
}

export default SideBar;
