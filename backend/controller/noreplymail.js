
const nodemailer = require("nodemailer");
const EmailModel = require("../model/EmailModel");

const SendEmailNoReply = async (req, res) => {

    try {
        const { to, subject, message } = req.body;

        // Validate
        if (!to || !Array.isArray(to) || to.length === 0) {
            return res.status(400).json({ message: "TO must be an array with at least one email" });
        }
        if (!subject || !message) {
            return res.status(400).json({ message: "Subject & Message are required" });
        }

        // Save multiple emails in DB
        const savedEmails = await EmailModel.insertMany(
            to.map(email => ({ to: email, subject, message }))
        );

        console.log("SMTP CONFIG:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER
});



        // Gmail SMTP Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Prepare mail options for multiple emails
        const mailList = {
            from: `"No Reply" <${process.env.SMTP_USER}>`,
            to: to.join(","), // Convert array to comma-separated list
            subject,
            text: message,
            replyTo: "no-reply@yourdomain.com"
        };

        // Send email (CORRECT)
        await transporter.sendMail(mailList);

        return res.status(200).json({
            message: "Multiple Emails sent successfully",
            data: savedEmails
        });

    } catch (error) {
        console.error("Email Error:", error);
        return res.status(500).json({
            message: "Email sending failed",
            error: error.message || error
        });
    }
};

module.exports = { SendEmailNoReply };
