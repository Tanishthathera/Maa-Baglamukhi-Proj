import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const reviews = t("testimonials.reviews", { returnObjects: true });

  return (
    <section className="testimonials">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("testimonials.title")}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("testimonials.subtitle")}
      </motion.p>

      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
          >
            <p className="message">“{review.message}”</p>
            <p className="devotee">
              — {review.name}, {review.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
