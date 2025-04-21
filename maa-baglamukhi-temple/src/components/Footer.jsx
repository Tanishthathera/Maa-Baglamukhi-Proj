import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const navLinks = [
    { path: "/", labelKey: "footer.home" },
    { path: "/book-puja", labelKey: "footer.bookPuja" },
    { path: "/contact", labelKey: "footer.contact" },
    { path: "/astrology", labelKey: "footer.astrology" },
  ];

  return (
    <footer className="site-footer">
      <div className="divine-aura-bg"></div>{" "}
      {/* Optional floating aura effect */}
      <div className="footer-links">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.path}
            custom={i}
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Link to={link.path}>{t(link.labelKey)}</Link>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="footer-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © {new Date().getFullYear()} {t("footer.rights")}
      </motion.p>
    </footer>
  );
};

export default Footer;
