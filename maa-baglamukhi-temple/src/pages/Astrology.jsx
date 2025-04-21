import React from "react";
import { useTranslation } from "react-i18next";

const Astrology = () => {
  const { t } = useTranslation();

  return (
    <section className="astrology-page">
      <div className="chakra-aura"></div>

      <div className="container fade-in">
        <h2 className="glow-text">🔮 {t("astrology.title")}</h2>
        <p className="astro-subtext">{t("astrology.comingSoon")}</p>
      </div>
    </section>
  );
};

export default Astrology;
