import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
    honeypot: "", // Hidden field to trap bots
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot detection
    if (formData.honeypot !== "") {
      return; // silently reject spam bot
    }

    setLoading(true);

    try {
      const response = await fetch("https://maa-baglamukhi-backend.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
    email: "callback@noemail.com", // dummy/fixed email to satisfy backend
    subject: `Callback Request from ${formData.name}`,
    content: `
      Name: ${formData.name}
      Mobile: ${formData.mobile}
      Message: ${formData.message}
    `
  }),
      });

      if (response.ok) {
        alert(t("questions.alert"));
        setFormData({ name: "", mobile: "", message: "", honeypot: "" });
      } else {
        const errorData = await response.json();
        console.error("Backend error:", errorData);
        alert("Error sending callback request. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending callback request. Please try again.");
    }

    setLoading(false);
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
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          type="text"
          name="name"
          placeholder={t("questions.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Name"
        />

        <input
          type="tel"
          name="mobile"
          placeholder={t("questions.phonePlaceholder")}
          value={formData.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          aria-label="Phone number"
        />

        <textarea
          name="message"
          placeholder={t("questions.questionPlaceholder")}
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Your Question"
        ></textarea>

        <button type="submit" disabled={loading} aria-label="Submit Callback Request">
          {loading ? t("questions.sending") : t("questions.button")}
        </button>
      </motion.form>
    </section>
  );
};

export default Questions;
