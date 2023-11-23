import React from "react";
import "../PopUp/PopUp.css";
import { useNavigate } from "react-router-dom";

export default function PopUp({ children }) {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
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
