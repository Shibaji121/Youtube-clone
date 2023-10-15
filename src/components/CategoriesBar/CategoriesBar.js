import React, { useState } from "react";
import "../CategoriesBar/CategoriesBar.css";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videosAction";

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

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
  };

  return (
    <div className="cata-cont">
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
    </div>
  );
};

export default CategoriesBar;
