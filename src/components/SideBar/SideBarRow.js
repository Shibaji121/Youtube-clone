import React, { useCallback } from "react";

function SideBarRow({ Icon, title, selected, onItemClick }) {
  const handleItemClick = useCallback(() => {
    onItemClick(title);
  }, [onItemClick, title]);

  return (
    <div
      className={`sidebar-row ${selected ? "selected" : ""}`}
      onClick={handleItemClick}
    >
      <Icon className="sideBar-icon" />
      <div className="sideBar-title">{title}</div>
    </div>
  );
}

export default React.memo(SideBarRow);
