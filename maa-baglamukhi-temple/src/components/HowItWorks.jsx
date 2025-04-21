import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = t("howItWorks.steps", { returnObjects: true });

  return (
    <section className="how-it-works">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("howItWorks.title")}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("howItWorks.subtitle")}
      </motion.p>

      <div className="steps">
        {steps.map((step, index) => (
          <motion.div
            className="step"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
          >
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
