import React from "react";
import { useTranslation } from "react-i18next";

const LangSwitch = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="lang-switch-btn">
      {t("header.language")}
    </button>
  );
};

export default LangSwitch;
