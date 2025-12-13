"use client";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-glass navbar-extended">
        {/* LEFT: Logo + Name */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src="/user.png" alt="Shoosahn" />
          </div>
          <span className="navbar-name">Shoosahn</span>
        </div>

        {/* RIGHT: Navigation */}
        <div className="navbar-right">
          <a href="#home" className="nav-item">
            Intro
          </a>
          <a href="#about-me" className="nav-item">
            About
          </a>
          <a href="#projects" className="nav-item">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
