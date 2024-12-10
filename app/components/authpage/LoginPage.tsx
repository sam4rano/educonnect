"use client";
import React, { useState } from "react";
import { styles } from "@/app/style/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { api } from "@/app/api/api";


const LoginPage = () => {
  const [logInID, setLogInID] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${api.auth.login}`, {
        logInID,
        password,
      });
      setData(response.data);
      console.log("data", data)
      
      toast.success("Login successful!");
      router.push("/dashboard"); 
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto py-10">
        
        <div className="flex flex-col gap-4 py-4 max-w-md mx-auto justify-center align-middle shadow-md  px-6 border rounded-lg">
          <div>
            <label htmlFor="logInID" className={`${styles.label}`}>
              LogIn ID (Email/Username)
            </label>
            <input
              type="text"
              id="logInID"
              name="logInID"
              value={logInID}
              onChange={(event) => setLogInID(event.target.value)}
              className={`${styles.input} w-full`}
            />
          </div>

          <div>
            <label htmlFor="password" className={`${styles.label}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={`${styles.input} w-full`}
            />
          </div>

          <button
            type="submit"
            className={`${styles.button} w-full`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;