import {
  AccountCircleOutlined,
  KeyboardVoiceRounded,
  Menu,
  NotificationsOutlined,
  Search,
  VideoCallOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "../Header/Header.css";
import { blue } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header({ handleToggleSideBar }) {
  const [searchInput, setSearchInput] = useState("");
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?search_query=${searchInput}`);
  };
  return (
    <div className="header">
      <div className="header_left">
        <Menu
          className="header-menu-btn"
          onClick={() => handleToggleSideBar()}
        />
        <a href="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="header_middle">
        <form className="header_input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-icon">
            <Search />
          </button>
        </form>
        <KeyboardVoiceRounded className="voice-icon" />
      </div>
      <div className="header_right">
        <VideoCallOutlined />
        <NotificationsOutlined />
        {user ? (
          <Avatar src={user.photoURL} alt="channel-avatar" />
        ) : (
          <div className="sign-in" onClick={handleLogin}>
            <AccountCircleOutlined sx={{ color: blue[800] }} />
            <span>Sign in</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
