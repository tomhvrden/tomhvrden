import React from "react";
import "./NavBar.css";

const sections = [
  { label: "Home", id: "home" },
  { label: "Music", id: "music" },
  { label: "About", id: "about" },
  { label: "Beats", id: "beats" },
  { label: "Blog", id: "blog" },
  { label: "Events", id: "events" },
];

const NavBar: React.FC = () => (
  <nav className="nav">
    <div className="nav__logo">TOM HVRDEN</div>
    <ul className="nav__links">
      {sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>{section.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;