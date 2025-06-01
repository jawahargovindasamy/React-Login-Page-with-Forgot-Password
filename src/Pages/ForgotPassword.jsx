import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      const response = await axios.post(
        "https://node-login-application-with-forgot.onrender.com/api/auth/forgot-password",
        { email }
      );
      console.log("Forgot password request sent:", response.data);
      toast.success(response.data.message || "Password reset email sent!");
    } catch (error) {
      console.log("Error during forgot password request:", error);
      toast.error(
        error?.response?.data?.message || "Failed to send password reset email"
      );
    } finally {
      setEmail("");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password?
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Enter your email to reset your password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-text"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-sm text-gray-700">
          Remembered your password?{" "}
          <Link
            to="/"
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
