"use client";

import React, { useState } from "react";
import CustomForm from "./customForm";

const MailchimpFormContainer: React.FC = () => {
  const [status, setStatus] = useState<"sending" | "error" | "success" | null>(
    null
  );
  const [message, setMessage] = useState<string | null>(null);

  const subscribe = async (formData: { EMAIL: string; MERGE0: string }) => {
    setStatus("sending");
    setMessage(null);

    const requestData = {
      u: process.env.NEXT_PUBLIC_MAILCHIMP_U,
      id: process.env.NEXT_PUBLIC_MAILCHIMP_ID,
      email: formData.EMAIL,
      merge0: formData.MERGE0,
    };

    try {
      // Send data to the backend API (/api/subscribe)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus("success");
        setMessage(result.message || "Subscription successful!");
      } else {
        const errorData = await response.json();
        setStatus("error");
        setMessage(
          errorData.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mc__form-container">
      <CustomForm
        status={status}
        message={message}
        onValidated={(formData: { EMAIL: string; MERGE0: string }) =>
          subscribe(formData)
        }
      />
    </div>
  );
};

export default MailchimpFormContainer;
