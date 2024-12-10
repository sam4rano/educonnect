import { styles } from "@/app/style/styles";
import { X } from "lucide-react";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="min-w-full min-h-full flex flex-col gap-4">
      <div className="max-w-sm w-full mx-auto py-10 flex flex-col gap-4">
        <div className="flex flex-row justify-between w-full">
          <X />
          <button
            className={`w-[89px] h-[48px] rounded-full bg-black text-white`}
          >
            Next
          </button>
        </div>
        <div>
          <h1 className="font-bold text-2xl ">Forgot password</h1>
          <p>Enter your email to receive a link and reset your password.</p>
        </div>
        <form action="">
          <label htmlFor="email" className={`${styles.label}`}>
            Email
          </label>
          <input id="email" className={`${styles.input}`} />
        </form>
        <button className={`w-full rounded-[24px] bg-slate-500 h-[48px]`}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
