const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY,
  process.env.MJ_SECRET_KEY
);

const sendEmailFromUser = async (sender, receiver, subject, htmlContent, textContent) => {
  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: receiver.email,
            Name: receiver.name,
          },
          To: [
            {
              Email: receiver.email,
              Name: receiver.name,
            },
          ],
          ReplyTo: {
            Email: sender.emailId,
          },
          Subject: subject,
          TextPart: textContent, // Add plain text version
          HTMLPart: htmlContent, // Add HTML part too
        },
      ],
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmailFromUser;
