import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://maa-baglamukhi-backend.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: `Contact Form Submission from ${formData.name}`,
            content: `
            Name: ${formData.name}
            Mobile: ${formData.mobile}
            Email: ${formData.email}
            Message: ${formData.message}
          `,
            email: formData.email,
          }),
        }
      );

      if (response.ok) {
        alert(
          "Your message has been sent successfully our team will contact you soon."
        );
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section className="contact-section">
      <img
        src="/assets/images/Shri_Yantra.png"
        alt="Shri Yantra"
        className="yantra-bg"
      />

      <h2 className="section-title glow-text"> {t("contact.title")}</h2>
      <p className="contact-subtext">{t("contact.subtitle")}</p>

      <form className="contact-form glass-card" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t("contact.name")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder={t("contact.mobile")}
          value={formData.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          aria-label="Phone number"
        />
        <textarea
          name="message"
          placeholder={t("contact.message")}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit"> {t("contact.button")}</button>
      </form>

      <div className="contact-info">
        <p>
          <strong>📞 {t("contact.direct")}:</strong>
        </p>
        <p>+91-9179999090</p>
        <p>📧 maabaglamukhinalkehda@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
