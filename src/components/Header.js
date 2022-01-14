import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Spacestagram</h1>
      <div>
        <a href="https://api.nasa.gov" target="_blank" rel="noreferrer">
          <i className="fas fa-user-astronaut"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
