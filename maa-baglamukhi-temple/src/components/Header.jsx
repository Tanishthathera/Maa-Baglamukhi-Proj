import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSwitch from "./LangSwitch";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </div>

        {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            {t("header.home")}
          </Link>
          <Link to="/book-puja" onClick={closeMenu}>
            {t("header.bookPuja")}
          </Link>
          <Link to="/gallery" onClick={closeMenu}>
            {t("header.gallery")}
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            {t("header.contact")}
          </Link>
          <Link to="/astrology" onClick={closeMenu}>
            {t("header.astrology")}
          </Link>

          {/* Language Switcher */}
          <LangSwitch />
        </nav>
      </header>
    </>
  );
};

export default Header;
