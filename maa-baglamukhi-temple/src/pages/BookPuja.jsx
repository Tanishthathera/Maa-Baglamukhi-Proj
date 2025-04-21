import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BookPuja = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pujaType: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:19010/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Puja Booking: ${formData.pujaType}`,
          content: `
            Name: ${formData.name}
            Mobile: ${formData.mobile}
            Email: ${formData.email}
            Puja Type: ${formData.pujaType}
            Date: ${formData.date}
            Message: ${formData.message}
          `,
          email: formData.email,
        }),
      });

      if (response.ok) {
        alert("Your puja booking request has been submitted successfully panditji will contact you soon.");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          pujaType: "",
          date: "",
          message: "",
        });
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <section className="book-puja-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("bookPuja.title")}
      </motion.h2>

      <p className="section-subtitle">{t("bookPuja.subtitle")}</p>

      <motion.form
        className="puja-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder={t("bookPuja.name")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder={t("bookPuja.mobile")}
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("bookPuja.email")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="pujaType"
          value={formData.pujaType}
          onChange={handleChange}
          required
        >
          <option value="">{t("bookPuja.selectPuja")}</option>
          <option value="Baglamukhi Anushthan">
            {t("bookPuja.pujaTypes.anushthan")}
          </option>
          <option value="Sarva Karya Siddhi">
            {t("bookPuja.pujaTypes.karyaSiddhi")}
          </option>
          <option value="Shatru Vinash">
            {t("bookPuja.pujaTypes.shatruVinash")}
          </option>
          <option value="Court Case Victory">
            {t("bookPuja.pujaTypes.courtCase")}
          </option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={t("bookPuja.message")}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">📿 {t("bookPuja.bookNow")}</button>
      </motion.form>
    </section>
  );
};

export default BookPuja;
