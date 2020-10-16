import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover/"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Discover Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
