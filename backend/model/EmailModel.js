const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
    to: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    folder: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model("Email", EmailSchema);
