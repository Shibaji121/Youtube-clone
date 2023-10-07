import React from "react";
import "../PopUp/PopUp.css";

export default function PopUp({ handleClose, children }) {
  return (
    <div className="pop-modal">
      <div className="pop-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}
