import { useState } from "react";
import EmailInput from "../inputs/emailInput";
import SuccessSubscription from "../successSubscription";
import { useMailchimp } from "@/hooks/useMailChimp";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import Spinner from "../spinner/spinner";

export default function EmailSection() {
  const [email, setEmail] = useState("");
  const { status, message, handleSubmit } = useMailchimp();

  return (
    <>
      {status === "success" && <SuccessSubscription />}
      {status !== "success" && (
        <>
          <h2 className="text-xl lg:text-2xl text-main_brown font-cardo mb-4">
            Sign up to our newsletter
          </h2>
          <form onSubmit={(event) => handleSubmit(event, email)}>
            <EmailInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "sending"}
            />
            {status === "error" && (
              <p className="text-red-500 font-cardo">{message}</p>
            )}
            <p>
              By signing up, you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>
              .
            </p>
            <PrimaryButton
              type="submit"
              className="mt-2"
              buttonType={ButtonType.Secondary}
            >
              {status === "sending" ? <Spinner /> : "Sign up"}
            </PrimaryButton>
          </form>
        </>
      )}
    </>
  );
}
