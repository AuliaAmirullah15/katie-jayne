"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component
import heroMobileUrl from "@/assets/images/jpg/heroMobile.jpg";
import PrimaryButton, { ButtonType } from "./buttons/primaryButton";
import EmailInput from "./inputs/emailInput";
import { useMailchimp } from "@/hooks/useMailChimp";

const EmailPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState("");
  const { status, message, subscribe } = useMailchimp();

  useEffect(() => {
    const isPopupShown = localStorage.getItem("popupShown");
    if (!isPopupShown) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsPopupVisible(false);
    localStorage.setItem("popupShown", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe({ EMAIL: email, MERGE0: email });
  };

  // console.log("isPopupVisible: " + isPopupVisible);

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 bg-black !bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative flex bg-white shadow-lg w-full m-6 md:mx-0 md:max-w-[600px]">
        <button
          className="absolute top-4 right-4 text-xl text-gray-700"
          onClick={handleClose}
        >
          &#x2715;
        </button>

        <div className="hidden md:block basis-1/2 grow relative">
          <Image
            src={heroMobileUrl}
            alt="Popup Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full md:basis-1/2 grow p-12 flex flex-col justify-center text-center">
          <p className="mb-6">Enter your email to unlock</p>
          <h2 className="text-2xl font-bold mb-6">15% off your first order</h2>
          <p className="text-sm text-gray-600 mb-6">
            Plus, get insider access to promotions, launches, events, and more.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <EmailInput
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PrimaryButton
              title="Unlock Access"
              type="submit"
              buttonType={ButtonType.Secondary}
              onClick={handleClose}
            />
          </form>

          {status === "sending" && <p>Sending...</p>}
          {status === "success" && <p>{message}</p>}
          {status === "error" && <p className="text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
