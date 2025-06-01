import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center text-white max-w-2xl p-8">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Our Website 🌟</h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Discover amazing features, explore content, and connect with our community.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
