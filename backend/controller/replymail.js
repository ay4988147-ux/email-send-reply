
const nodemailer=require('nodemailer')
const EmailModel = require("../model/EmailModel");


const SendEmailWithReply = async (req, res) => {
    try {

        const { to, subject, message } = req.body;

       
        if (!to || !Array.isArray(to) || to.length === 0) {
            return res.status(400).json({ message: "TO must be an array with at least one email" });
        }
        if (!subject || !message) {
            return res.status(400).json({ message: "Subject & Message are required" });
        }

        // SAVE ALL EMAILS IN DB
        const savedEmails = await EmailModel.insertMany(
            to.map(email => ({ to: email, subject, message }))
        );


        console.log("SMTP CONFIG:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER
});



        // CREATE TRANSPORTER
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

        // EMAIL OPTIONS
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: to.join(","), 
            subject,
            text: message
        };

        // SEND EMAIL
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            message: "Emails sent successfully",
            data: savedEmails
        });

    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
            message: "Email sending failed",
            error: error.message || error
        });
    }
};

module.exports = { SendEmailWithReply };