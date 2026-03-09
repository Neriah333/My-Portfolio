const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    });

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
});

module.exports = router;