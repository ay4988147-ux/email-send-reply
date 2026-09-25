
import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    Full_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("https://email-send-reply.onrender.com/api/email/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful. Please login.");
      window.location.href = "/signin";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-center mb-6 text-2xl font-bold text-gray-800">
          Create Account
        </h3>

        <form onSubmit={handleSignup}>
          <input
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="First Name"
            name="Full_Name"
            onChange={handleChange}
            required
          />

          <input
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Last Name"
            name="Last_Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Email"
            name="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            className="w-full px-4 py-3 mb-5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Password"
            name="Password"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-5 mb-0 text-gray-600">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
