
import React, { useState } from "react";

const Signin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5001/api/email/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Email, Password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/mail";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-center mb-6 text-2xl font-bold text-gray-800">
          Login
        </h3>

        <form onSubmit={handleSignin}>
          <input
            type="email"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full px-4 py-3 mb-5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-5 mb-0 text-gray-600">
          New user?{" "}
          <a
            href="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;

