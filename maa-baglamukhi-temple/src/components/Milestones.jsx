import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Milestones = () => {
  const { t } = useTranslation();
  const milestoneData = t("milestones.cards", { returnObjects: true });

  return (
    <section className="milestones-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("milestones.title")}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("milestones.subtitle")}
      </motion.p>

      <div className="milestone-cards">
        {milestoneData.map((card, index) => (
          <motion.div
            key={index}
            className="milestone-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
