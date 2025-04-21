import React from "react";
import { useTranslation } from "react-i18next";
import { FaGavel, FaHandHoldingHeart, FaPrayingHands } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HistoryMiracles = () => {
  const { t } = useTranslation();

  return (
    <section className="history-miracles">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("historyMiracles.title")}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t("historyMiracles.description")}
      </motion.p>

      {/* Miracle Cards */}
      <div className="miracle-cards">
        {/* Card 1 */}
        <motion.div
          className="miracle-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaGavel className="icon" />
          <h3>{t("historyMiracles.card1.title")}</h3>
          <p>{t("historyMiracles.card1.text")}</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="miracle-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaHandHoldingHeart className="icon" />
          <h3>{t("historyMiracles.card2.title")}</h3>
          <p>{t("historyMiracles.card2.text")}</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="miracle-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <FaPrayingHands className="icon" />
          <h3>{t("historyMiracles.card3.title")}</h3>
          <p>{t("historyMiracles.card3.text")}</p>
        </motion.div>
      </div>

      {/* Final Note */}
      <motion.p
        className="final-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {t("historyMiracles.finalNote")}
        <Link to="/about-maa-full" className="read-more-button">
          {t("common.readMore")}
        </Link>
      </motion.p>
    </section>
  );
};

export default HistoryMiracles;
