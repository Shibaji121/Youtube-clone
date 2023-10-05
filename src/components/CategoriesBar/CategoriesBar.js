import React, { useState } from "react";
import "../CategoriesBar/CategoriesBar.css";

const keywords = [
  "All",
  "React JS",
  "Angular",
  "React Native",
  "Use of Api",
  "Redux",
  "Music",
  "Alogorithm art",
  "Guitar",
  "Bengoli Songs",
  "Coding",
  "Cricket",
  "FootBall",
  "Real Madrid",
  "Shibaji",
  "Sahu",
  "Amul",
  "Artists",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="cata-bar">
      {keywords.map((value, index) => {
        return (
          <span
            onClick={() => handleClick(value)}
            key={index}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
