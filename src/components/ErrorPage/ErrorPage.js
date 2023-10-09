import React from "react";
import "../ErrorPage/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-page">
        <img
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
          alt="mon"
        />
        <p>
          This page isn't available. Sorry about that. Try searching for
          something else.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
