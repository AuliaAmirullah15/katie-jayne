"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroMobileUrl from "@/assets/images/jpg/heroMobile.jpg";
import PrimaryButton, { ButtonType } from "./buttons/primaryButton";
import EmailInput from "./inputs/emailInput";
import { useMailchimp } from "@/app/hooks/useMailChimp";
import Spinner from "./spinner/spinner";
import SuccessSubscription from "./successSubscription";

const EmailPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState("");
  const { status, message, handleSubmit } = useMailchimp();

  useEffect(() => {
    const isPopupShown = localStorage.getItem("popupShown");
    // const isPopupShown = false;
    if (!isPopupShown) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("no-scroll");
  }, [isPopupVisible]);

  const handleClose = () => {
    setIsPopupVisible(false);
    localStorage.setItem("popupShown", "true");
  };

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black !bg-opacity-50 flex items-center justify-center">
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
          {status === "success" && <SuccessSubscription />}
          {status !== "success" && (
            <>
              <p className="mb-6">Enter your email to unlock</p>
              <h2 className="text-2xl font-bold mb-6">
                15% off your first order
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Plus, get insider access to promotions, launches, events, and
                more.
              </p>
              <form
                onSubmit={(event) => handleSubmit(event, email)}
                className="flex flex-col"
              >
                <EmailInput
                  className="mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "sending"}
                  required
                />
                {status === "error" && (
                  <p className="text-red-500 font-cardo">{message}</p>
                )}
                <PrimaryButton type="submit" buttonType={ButtonType.Secondary}>
                  {status === "sending" ? <Spinner /> : "Unlock Access"}
                </PrimaryButton>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
