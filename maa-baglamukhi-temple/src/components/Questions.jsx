import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Callback Request:", formData);
    alert(t("questions.alert"));
    setFormData({ name: "", phone: "", question: "" });
  };

  return (
    <section className="questions-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("questions.title")}
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("questions.subtitle")}
      </motion.p>

      <motion.form
        className="callback-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder={t("questions.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder={t("questions.phonePlaceholder")}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="question"
          placeholder={t("questions.questionPlaceholder")}
          value={formData.question}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">{t("questions.button")}</button>
      </motion.form>
    </section>
  );
};

export default Questions;
