import React from "react";
import "../styles/SideBar.css";
import SideBarRow from "./SideBarRow";
import {
  HomeOutlined,
  SubscriptionsOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";

function SideBar() {
  return (
    <div className="side-bar">
      <SideBarRow Icon={HomeOutlined} title={"Home"} />
      <SideBarRow Icon={WhatshotOutlined} title={"Trending"} />
      <SideBarRow Icon={SubscriptionsOutlined} title={"Subscriptions"} />
    </div>
  );
}

export default SideBar;
