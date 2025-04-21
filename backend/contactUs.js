const express = require("express");
const router = express.Router();
const sendEmailFromUser = require("./emailFromUser");

router.post("/", async (req, res) => {
  try {
    const { subject, content, email } = req.body;
    if (!subject || !content || !email) {
      return res
        .status(400)
        .json({ error: "Email, Subject, and Content are required." });
    }

    const EmailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Us Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${content}</p>
      </div>
    `;

    const sender = { emailId: email };
    const receiver = { email: "tanishthathera@gmail.com", name: "Tanish" };

    await sendEmailFromUser(sender, receiver, subject, EmailContent);

    res
      .status(200)
      .json({ message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Error in contactUs route:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending your message." });
  }
});

module.exports = router;
