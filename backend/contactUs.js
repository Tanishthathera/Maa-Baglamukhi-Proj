const express = require("express");
const router = express.Router();
const sendEmailFromUser = require("./emailFromUser");

const backgroundImageUrl =
  "https://maabaglamukhi.vercel.app/assets/images/emailtemp.jpg";
const logoImageUrl =
  "https://maabaglamukhi.vercel.app/assets/images/maabaglamukhi-icon2.png";

router.post("/", async (req, res) => {
  try {
    const { subject, content, email, name, mobile, message } = req.body;

    // Smart detection of form type: Contact/BookPuja vs Questions
    let finalSubject = subject || "New User Query from Questions Section";
    let finalContent = "";
    let senderEmail = email || "noreply@maabaglamukhi.in";

    if (email && subject && content) {
      // 📩 Contact or BookPuja form submission
      finalContent = `
        <div>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${content}</p>
        </div>
      `;
    } else if (name && mobile && message) {
      // ❓ Questions form submission
      finalContent = `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `;
    } else {
      return res.status(400).json({
        error: "Missing required fields. Please include either {email, subject, content} or {name, mobile, message}.",
      });
    }

    const EmailHTML = `
      <div
        style="
          max-width: 680px;
          margin: 0 auto;
          padding: 45px 30px 60px;
          background: #f4f7ff;
          background-image: url(${backgroundImageUrl});
          background-repeat: no-repeat;
          background-size: 900px 455px;
          background-position: top center;
          font-size: 14px;
          color: #434343;
        "
      >
        <header>
          <div>
            <img src="${logoImageUrl}" alt="Logo" width="40px">
          </div>
        </header>

        <main>
          <div
            style="
              margin: 0;
              margin-top: 70px;
              padding: 92px 30px 115px;
              background: #ffffff;
              border-radius: 30px;
              text-align: center;
            "
          >
            <div style="width: 100%; max-width: 489px; margin: 0 auto;">
              <h1
                style="
                  margin: 0;
                  font-size: 24px;
                  font-weight: 500;
                  color: #1f1f1f;
                "
              >
                New Form Submission
              </h1>
              <p
                style="
                  margin: 0;
                  margin-top: 17px;
                  font-size: 16px;
                  font-weight: 500;
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
                ${finalContent}
              </div>
            </div>
          </div>

          <p
            style="
              max-width: 400px;
              margin: 0 auto;
              margin-top: 90px;
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

    const sender = { emailId: senderEmail };
    const receiver = { email: "tanishthathera@gmail.com", name: "Tanish" };

    await sendEmailFromUser(sender, receiver, finalSubject, EmailHTML, finalContent);

    res.status(200).json({ message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Error in email route:", error);
    res.status(500).json({ error: "An error occurred while sending your message." });
  }
});

module.exports = router;
