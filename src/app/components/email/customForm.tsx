"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

type StatusType = "error" | "success" | "sending" | null;
type MessageType = string | Error | null;

type FormData = {
  EMAIL: string;
  MERGE0: string; // Mailchimp requires this field for the email address
  [key: string]: string; // Allow additional fields if needed
};

const CustomForm: React.FC<{
  status: StatusType;
  message: MessageType;
  onValidated: (data: FormData) => void;
}> = ({ status, message, onValidated }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
    if (modalOpen && status === "success") clearFields();
  }, [status, modalOpen]);

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email,
        MERGE0: email,
      });
    }
  };

  const validateInput = (values: (string | string[])[]) => {
    return values.some(
      (value: string | string[]) =>
        typeof value === "string" && (value === "" || value.indexOf("@") === -1)
    );
  };

  return (
    <form className="mc__form" onSubmit={handleSubmit}>
      <h3 className="mc__title">
        {status === "success"
          ? "Success!"
          : "Join our email list for future updates."}
      </h3>
      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message?.toString() ?? "" }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message?.toString() ?? "" }}
        />
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <div className="mc__field-container">
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              type="email"
              placeholder="your@email.com"
              value={email}
              required={true}
              className="inputField__field"
              name="email"
            />
          </div>
        </div>
      ) : null}

      {status === "success" ? (
        <button
          onClick={() => setModalOpen(false)}
          className="g__justify-self-center"
        >
          Close
        </button>
      ) : (
        <input
          className="primaryBtn primaryBtn--big g__justify-self-center"
          type="submit"
          value="subscribe"
          disabled={validateInput([email])}
        />
      )}
    </form>
  );
};

export default CustomForm;
