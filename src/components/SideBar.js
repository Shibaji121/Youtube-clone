import React from "react";
import "../styles/SideBar.css";
import SideBarRow from "./SideBarRow";
import {
  ContentCutOutlined,
  HistoryOutlined,
  HomeOutlined,
  KeyboardArrowDownOutlined,
  SmartDisplayOutlined,
  SubscriptionsOutlined,
  VerticalAlignBottomOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";

function SideBar() {
  return (
    <div className="side-bar">
      <SideBarRow Icon={HomeOutlined} title={"Home"} selected={true} />
      <SideBarRow Icon={WhatshotOutlined} title={"Trending"} />
      <SideBarRow Icon={SubscriptionsOutlined} title={"Subscriptions"} />
      <hr />
      <SideBarRow Icon={VideoLibraryOutlined} title={"Library"} />
      <SideBarRow Icon={HistoryOutlined} title={"History"} />
      <SideBarRow Icon={SmartDisplayOutlined} title={"Your videos"} />
      <SideBarRow Icon={WatchLaterOutlined} title={"Watch later"} />
      <SideBarRow Icon={VerticalAlignBottomOutlined} title={"Downloads"} />
      <SideBarRow Icon={ContentCutOutlined} title={"Your clips"} />
      <SideBarRow Icon={KeyboardArrowDownOutlined} title={"Show more"} />
    </div>
  );
}

export default SideBar;
