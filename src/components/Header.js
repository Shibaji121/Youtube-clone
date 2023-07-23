import {
  KeyboardVoiceRounded,
  Menu,
  NotificationsOutlined,
  Search,
  VideoCallOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>I am a Header</h1>
      <Menu />
      <img
        className="header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        alt="logo"
      />
      <input type="text" />
      <Search />
      <KeyboardVoiceRounded />
      <VideoCallOutlined />
      <NotificationsOutlined />
      <Avatar
        src="https://assets.turbologo.com/blog/en/2019/10/19084946/spiderman-logo-illustration-958x575.jpg"
        alt="channel-logo"
      />
    </div>
  );
}

export default Header;
