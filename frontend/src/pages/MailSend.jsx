
import React, { useState } from "react";

const MailSend =()=> {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");

  const sendWithReply = async () => {
    try {
      const res = await fetch("https://email-send-reply.onrender.com/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: to.split(","),
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setAlertType("success");
        setAlertMsg("Reply Email Sent Successfully!");
      } else {
        setAlertType("danger");
        setAlertMsg(data.error || "Failed to send Reply Email");
      }
    } catch (err) {
      setAlertType("danger");
      setAlertMsg("Server error while sending email");
    }
  };

  const sendNoReply = async () => {
    try {
      const res = await fetch(
         "https://email-send-reply.onrender.com/api/email/sendnoreply"
       ,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: to.split(","),
            subject,
            message,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setAlertType("success");
        setAlertMsg("No-Reply Email Sent Successfully!");
      } else {
        setAlertType("danger");
        setAlertMsg(data.error || "Failed to send No-Reply Email");
      }
    } catch (err) {
      setAlertType("danger");
      setAlertMsg("Server error while sending email");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div className="w-full max-w-[620px]">
        <h2 className="text-center text-white mb-6 font-bold text-3xl">
          ✉️ Email Sender Panel
        </h2>

        {alertMsg && (
          <div
            className={`mb-4 p-4 rounded-lg shadow-md text-white ${
              alertType === "success" ? "bg-green-500" : "bg-red-500"
            }`}
            role="alert"
          >
            {alertMsg}
          </div>
        )}

        <div
          className="p-6 shadow-2xl border-0"
          style={{
            borderRadius: "18px",
            background: "rgba(255,255,255,0.95)",
          }}
        >
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">
              Email (comma separated)
            </label>

            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="test@gmail.com, user@yahoo.com"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">
              Subject
            </label>

            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">
              Message
            </label>

            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              className="w-1/2 py-3 rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition"
              style={{
                background: "linear-gradient(135deg, #43cea2, #185a9d)",
              }}
              onClick={sendWithReply}
            >
              Send With Reply
            </button>

            <button
              className="w-1/2 py-3 rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition"
              style={{
                background: "linear-gradient(135deg, #ff512f, #dd2476)",
              }}
              onClick={sendNoReply}
            >
              Send No-Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailSend;

