import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LocationMap = () => {
  const { t } = useTranslation();

  return (
    <section className="location-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("location.heading")}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("location.description")}
        </motion.p>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <iframe
            title="Maa Baglamukhi Mandir Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8648025143475!2d76.23303007520892!3d23.841389684387863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b97a0576ae97%3A0x45323f30be84261c!2sBaglamukhi%20Mandir%20Nalkheda!5e0!3m2!1sen!2sin!4v1712640500634!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
