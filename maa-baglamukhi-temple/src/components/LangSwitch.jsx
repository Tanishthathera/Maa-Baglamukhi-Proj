import React from "react";
import { useTranslation } from "react-i18next";

const LangSwitch = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <label className="lang-toggle">
      <input
        type="checkbox"
        onChange={toggleLanguage}
        checked={i18n.language === "hi"}
      />
      <span className="slider">
        <span className="lang-label">{t("language.en")}</span>
        <span className="lang-label">{t("language.hi")}</span>
      </span>
      <span className="lang-tooltip">{t("language.tooltip")}</span>
    </label>
  );
};

export default LangSwitch;
