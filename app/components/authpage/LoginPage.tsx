"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { styles } from "@/app/style/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "@/redux/features/auth/authSlice"; // Adjusted action for consistency
import { z } from "zod";
import { withZodSchema } from "formik-validator-zod";
import { useRouter } from "next/navigation";

const LoginFormSchema = z.object({
  logInID: z.string().nonempty("Log In ID is required"), // Adjust field name
  password: z.string().nonempty("Password is required"),
});

type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [login, { isLoading }] = useLoginMutation(); // Mutation setup
  const router = useRouter();

  const formik = useFormik<LoginFormSchemaType>({
    initialValues: {
      logInID: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const response = await login({
          logInID: values.logInID,
          password: values.password,
        }).unwrap();

        // Dispatch userLoggedIn with response data
        dispatch(userLoggedIn(response));

        // Success toast and redirect
        toast.success("Login successful!");
        router.push("/dashboard"); // Redirect on successful login
      } catch (err: any) {
        console.error("Login failed:", err);

        // Display error toast
        toast.error(
          err?.data?.message ||
          err?.message ||
          "Login failed. Please check your credentials."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    validate: withZodSchema(LoginFormSchema),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-md mx-auto">
        <h2 className={`${styles.title} text-center`}>Login</h2>
        <div className="flex flex-col gap-4 max-w-md mx-auto justify-center align-middle shadow-md py-6 px-6 border rounded-lg">
          <div>
            <label htmlFor="logInID" className={`${styles.label}`}>
              LogIn ID (Email/Username)
            </label>
            <input
              type="text"
              id="logInID"
              name="logInID"
              onChange={formik.handleChange}
              value={formik.values.logInID}
              className={`${styles.input} w-full`}
            />
            {formik.errors.logInID && formik.touched.logInID && (
              <div className="text-red-500">{formik.errors.logInID}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className={`${styles.label}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`${styles.input} w-full`}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className={`${styles.button} w-full`}
            disabled={isSubmitting || !formik.isValid || !formik.dirty}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
