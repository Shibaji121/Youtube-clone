import React from "react";

function SideBarRow({ Icon, title }) {
  return (
    <div className="sidebar-row">
      <Icon className="sideBar-icon" />
      <div className="sideBar-title">{title}</div>
    </div>
  );
}
export default SideBarRow;
