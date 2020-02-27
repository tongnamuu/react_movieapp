import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div class="nav">
      <div class="nav__bar">
        <Link to="/">Home</Link>
      </div>
      <div class="nav__bar">
        <Link
          to={{
            pathname: "/About",
            state: {
              fromNavigation: true
            }
          }}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
