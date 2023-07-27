import React from "react";

function SideBarRow({ Icon, title, selected }) {
  return (
    <div className={`sidebar-row ${selected && `selected`}`}>
      <Icon className="sideBar-icon" />
      <div className="sideBar-title">{title}</div>
    </div>
  );
}
export default SideBarRow;
