const backgroundImageUrl =
  "https://maabaglamukhi.vercel.app/assets/images/emailtemp.jpg";
const logoImageUrl =
  "https://maabaglamukhi.vercel.app/assets/images/maabaglamukhi-icon2.png";

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
      <div
        style="
            max-width: 680px;
            margin: 0 auto;
            padding: 45px 30px 60px;
            background: #f4f7ff;
            font-size: 14px;
            color: #434343;
        "
      >
        <header>
          <div>
            <img src="${logoImageUrl}" alt="Logo" width="40px" style="display:block; margin-bottom:20px;">
          </div>
        </header>

        <main>
          <div
            style="
              margin: 0;
              margin-top: 20px;
              padding: 30px;
              background: #ffffff;
              border-radius: 10px;
              text-align: center;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            "
          >
            <p
              style="
                margin: 0;
                font-size: 16px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              <b>Dear Admin,</b>
            </p>
            <div
              style="
                margin-top: 20px;
                background: #f9f9f9;
                padding: 15px;
                border-radius: 10px;
                font-size: 14px;
                color: #333;
                text-align: left;
                word-break: break-word;
              "
            >
              ${content}
            </div>
          </div>

          <p
            style="
              max-width: 400px;
              margin: 20px auto 0;
              text-align: center;
              font-weight: 500;
              color: #8c8c8c;
            "
          >
            Need help? Ask at
            <a
              href="mailto:tanishthathera@gmail.com"
              style="color: #499fb6; text-decoration: none;"
            >
              tanishthathera@gmail.com
            </a>
            or visit our
            <a
              href=""
              target="_blank"
              style="color: #499fb6; text-decoration: none;"
            >
              Help Center
            </a>
          </p>
        </main>

        <footer
          style="
            width: 100%;
            max-width: 490px;
            margin: 20px auto 0;
            text-align: center;
            border-top: 1px solid #e6ebf1;
          "
        >
          <p
            style="
              margin: 0;
              margin-top: 40px;
              font-size: 16px;
              font-weight: 600;
              color: #434343;
            "
          >
            Maa Baglamukhi
          </p>

          <p style="margin: 0; margin-top: 16px; color: #434343;">
            Copyright © 2025 Maa Baglamukhi Mandir, Nalkheda. All rights reserved.
          </p>
        </footer>
      </div>
    `;

    const sender = { emailId: email };
    const receiver = { email: "tanishthathera@gmail.com", name: "Tanish" };

    await sendEmailFromUser(sender, receiver, subject, EmailContent, content);

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
