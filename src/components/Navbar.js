import React from "react";
import "./Navbar.css";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-items">
            <li className="nav-home">
              <Link to="/" className="link">
                ERIC DAO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="experience" className="link">
                EXPERIENCE
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/projects" className="link">
                PROJECTS
              </Link>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/etc" className="link">
                ETC.
              </Link>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/contact" className="link">
                CONTACT
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
    </>
  );
}
