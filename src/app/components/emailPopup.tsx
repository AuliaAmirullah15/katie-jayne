"use client";
import React, { useState, useEffect } from "react";

const EmailPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown
    const isPopupShown = localStorage.getItem("popupShown");
    if (!isPopupShown) {
      // Show popup after a delay (e.g., 5 seconds)
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsPopupVisible(false);
    localStorage.setItem("popupShown", "true"); // Mark popup as shown
  };

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 bg-black !bg-opacity-50 flex flex-row items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-2 text-center">
          Subscribe to our Newsletter!
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Get 10% off your first purchase.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClose}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
        <button
          onClick={handleClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EmailPopup;
