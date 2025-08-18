"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("The email is not valid")
        .required("Email is importnant"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is important"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:3001/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "An error occurred.");
          return;
        }

        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.user));

        router.push("/admin/dashboard");        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("A server error occurred.");
      }
    },
  });

  return (
    <div>
      <div>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white">
          <h1 className="text-4xl primary-font font-medium text-[#181b23] -ml-10 mb-5 text-left w-full max-w-6xl">
            Account
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">

            <div className="border h-[250px] text-[#181b23] border-gray-200 p-6  rounded-md flex flex-col justify-between ">
              <div>
                <h2 className="text-2xl tracking-wide primary-font font-bold mb-2">
                  New Customer
                </h2>
                <p className="font-bold text-[13px] text-[#5a6069] mb-2">
                  Register Account
                </p>
                <p className=" text-[#5a6069] text-sm ">
                  By creating an account you will be able to shop faster, be up
                  to date on an order’s status, and keep track of the orders you
                  have previously made.
                </p>
              </div>

              <Link
                href="/register"
                className="bg-[#181b23] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#e51515] primary-font text-white px-7 py-3 rounded-full text-[12px] font-semibold w-fit"
              >
                CONTINUE
              </Link>
            </div>


            <div className="border border-gray-200 p-8 rounded-md">
              <h2 className="text-2xl text-[#181b23] primary-font font-semibold mb-2">
                Returning Customer
              </h2>
              <p className="font-semibold text-[#5a6069] mb-4">
                I am a returning customer
              </p>

              <form className="space-y-5" onSubmit={formik.handleSubmit}>

                <div>
                  <label className="block text-sm text-[#5a6069] font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#66afe9]"
                  />
                  {formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-[#5a6069] font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#66afe9]"
                  />
                  {formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
                  <span className="text-gray-600 hover:text-[#e51515]">
                    Forgot your password?
                  </span>
                  <a href="#" className="text-[#e51515] hover:underline">
                    Return to Store
                  </a>
                </div>

                <button
                  type="submit"
                  className="bg-[#181b23] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#e51515] primary-font text-white px-7 py-3 rounded-full text-[13px] font-semibold inline-block"
                >
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
