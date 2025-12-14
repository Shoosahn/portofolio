"use client";

import "./Navbar.css";

export default function Navbar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-glass navbar-extended">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src="/user.png" alt="Shoosahn" />
          </div>
          <span className="navbar-name">Shoosahn</span>
        </div>

        <div className="navbar-right">
          <a href="#home" onClick={scrollTo("home")} className="nav-item">
            Intro
          </a>
          <a href="#about-me" onClick={scrollTo("about-me")} className="nav-item">
            About
          </a>
          <a href="#projects" onClick={scrollTo("projects")} className="nav-item">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
