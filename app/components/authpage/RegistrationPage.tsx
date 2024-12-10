"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import { z } from "zod";
 // Adjust according to your store setup
import { styles } from "@/app/style/styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(25, "Name should be at most 25 characters long"),
  email: z.string().email("Invalid email"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username should be at most 20 characters long")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  phone: z.string().min(10, "Phone number should be at least 10 characters long"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters long")
    .max(16, "Password should be at most 16 characters long"),
});

type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

const fieldDefinitions = [
  { name: "fullName", label: "Full Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "username", label: "Username", type: "text" },
  { name: "password", label: "Password", type: "password" },
  { name: "phone", label: "Phone", type: "phone" },
];

const RegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<RegisterFormSchemaType>({
    initialValues: {
      fullName: "",
      email: "",
      username: "",
      password: "",
      phone:"",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        toast.success("Registration successful!");
        resetForm();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Registration failed:", error);
        toast.error(
          error?.data?.message || "Registration failed. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    validate: withZodSchema(RegisterFormSchema),
  });

  // if (user) {
  //   return (
  //     <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-center">
  //       <h2 className={`${styles.title}`}>Registration Successful!</h2>
  //       <p>Welcome, {user.fullName}!</p>
  //       <p className="mt-2 text-gray-600">Your account has been created.</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <ToastContainer />

      <form onSubmit={formik.handleSubmit} className="w-full max-w-md mx-auto py-6">
        <h2 className={`${styles.title} text-center`}>Login to Educonnect</h2>
        <div className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-md">
          {fieldDefinitions.map(({ name, label, type }) => (
            <div key={name} className="form-group">
              <label htmlFor={name} className={`${styles.label}`}>
                {label}
              </label>
              <input
                {...formik.getFieldProps(name as keyof RegisterFormSchemaType)}
                id={name}
                type={type}
                className={`${styles.input}`}
              />
              {formik.touched[name as keyof RegisterFormSchemaType] &&
                formik.errors[name as keyof RegisterFormSchemaType] && (
                  <div className="text-red-500">
                    {formik.errors[name as keyof RegisterFormSchemaType]}
                  </div>
                )}
            </div>
          ))}

          <button
            type="submit"
            className={`${styles.button}`}
            disabled={isSubmitting || !formik.isValid || !formik.dirty}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationPage;
