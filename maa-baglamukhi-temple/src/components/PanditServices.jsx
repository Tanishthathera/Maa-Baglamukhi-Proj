import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PanditServices = () => {
  const { t } = useTranslation();
  const services = t("panditServices.services", { returnObjects: true });

  return (
    <section className="pandit-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("panditServices.title")}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {t("panditServices.subtitle")}
      </motion.p>

      <div className="pandit-content">
        <motion.img
          src="/assets/images/panditji.png"
          alt="Pandit Ji"
          className="pandit-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.div
          className="pandit-details"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>{t("panditServices.description")}</p>

          <ul className="puja-services">
            {services.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PanditServices;
