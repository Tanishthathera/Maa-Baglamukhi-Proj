import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutMaa = () => {
  const { t } = useTranslation();

  return (
    <section className="about-maa">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img
            src="/assets/images/Shri_Yantra.png"
            alt={t("aboutMaa.imageAlt")}
          />
        </div>

        {/* Right Text Content */}
        <div className="about-text">
          <h2>{t("aboutMaa.title")}</h2>
          <p>{t("aboutMaa.para1")}</p>
          <p>
            {t("aboutMaa.para2")}{" "}
            {
              <Link to="/about-maa-full" className="read-more-button">
                {t("common.readMore")}
              </Link>
            }
          </p>

          <div className="mantra-highlight">{t("aboutMaa.mantra")}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMaa;
