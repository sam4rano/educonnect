import { styles } from "@/app/style/styles";
import { X } from "lucide-react";
import React from "react";

const ConfirmEmailPage = () => {
  return (
    <div className="min-w-full min-h-full flex flex-col gap-4">
      <div className="max-w-sm w-full mx-auto py-10 flex flex-col gap-4">
        <div className="flex flex-row justify-between w-full">
          <X />
          <button className={`w-[89px] h-[48px] rounded-full bg-black text-white`}>
            Next
          </button>
        </div>
		<div>
			<h1 className="font-bold text-2xl ">Confirm your email</h1>
			<p>Please enter the code we sent to {}</p>
		</div>
        <form action="">
          <label htmlFor="email" className={`${styles.label}`}>
            email
          </label>
          <input id="email" className={`${styles.input}`} />
        </form>
		<div className="flex flex-col">
			<h3>Didn’t receive an email or something went wrong?</h3>
			<p className="underline">Resend code</p>
		</div>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
