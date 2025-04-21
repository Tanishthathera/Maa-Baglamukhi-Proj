import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Left Image */}
          <div className="hero-image-left">
            <img
              src="/assets/images/maa-baglamukhi.jpg"
              alt={t("hero.imageAlt")}
            />
          </div>

          {/* Right Text Content */}
          <div className="hero-text-right">
            <h1 className="fade-in-up">{t("hero.title")}</h1>
            <p className="fade-in-up delay-1">{t("hero.subtitle")}</p>
            <Link to="/book-puja" className="puja-btn fade-in-up delay-2">
              {t("hero.bookButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
