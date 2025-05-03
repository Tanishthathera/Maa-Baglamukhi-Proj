const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY,
  process.env.MJ_SECRET_KEY
);

const sendEmailFromUser = async (sender, receiver, subject, htmlContent) => {
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
          TextPart: "This is the plain text version of the email.",
          HTMLPart: htmlContent,
        },
      ],
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmailFromUser;
