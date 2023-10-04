import {
  KeyboardVoiceRounded,
  Menu,
  NotificationsOutlined,
  Search,
  VideoCallOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "../Header/Header.css";

function Header({ handleToggleSideBar }) {
  return (
    <div className="header">
      <div className="header_left">
        <Menu
          className="header-menu-btn"
          onClick={() => handleToggleSideBar()}
        />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="logo"
        />
      </div>
      <div className="header_middle">
        <div className="header_input">
          <input type="text" placeholder="Search" />
          <Search className="search-icon" />
        </div>
        <KeyboardVoiceRounded className="voice-icon" />
      </div>
      <div className="header_right">
        <VideoCallOutlined />
        <NotificationsOutlined />
        <Avatar
          src="https://assets.turbologo.com/blog/en/2019/10/19084946/spiderman-logo-illustration-958x575.jpg"
          alt="channel-avatar"
        />
      </div>
    </div>
  );
}

export default Header;
