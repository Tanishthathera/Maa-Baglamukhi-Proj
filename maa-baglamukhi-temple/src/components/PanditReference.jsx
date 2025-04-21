import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PanditReference = () => {
  const { t } = useTranslation();
  const references = t("panditReference.cards", { returnObjects: true });

  return (
    <section className="pandit-reference">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("panditReference.title")}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("panditReference.subtitle")}
      </motion.p>

      <div className="references">
        {references.map((ref, idx) => (
          <motion.div
            className="reference-card"
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
          >
            <h3>{ref.title}</h3>
            <p>{ref.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PanditReference;
