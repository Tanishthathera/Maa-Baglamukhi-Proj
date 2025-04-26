import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Mantras = () => {
  const { t } = useTranslation();

  return (
    <section className="mantras-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("mantras.heading")}
      </motion.h2>

      {/* Beej Mantra */}
      <motion.div
        className="mantra-block"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>🔱 {t("mantras.beejTitle")}</h3>
        <p className="mantra-text glow-text">{t("mantras.beejMantra")}</p>
      </motion.div>

      {/* Maha Mantra */}
      <motion.div
        className="mantra-block"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>📿 {t("mantras.mahaTitle")}</h3>
        <p className="mantra-text glow-text">{t("mantras.mahaMantra")}</p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        className="mantra-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3> {t("mantras.benefitsTitle")}</h3>
        <ul>
          <li>{t("mantras.benefits.0")}</li>
          <li>{t("mantras.benefits.1")}</li>
          <li>{t("mantras.benefits.2")}</li>
          <li>{t("mantras.benefits.3")}</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Mantras;
