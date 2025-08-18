"use client";

import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

const RegisterForm: FC = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string().email("E-mail is wrong").required("Email is required"),
            password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
        }),
        onSubmit: async (values) => {
            try {
                const res = await fetch("http://localhost:3001/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                });

                const data = await res.json();

                if (!res.ok) {
                    setError(data.message || "Xəta baş verdi");
                    return;
                }

               
                router.push("/login");
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("A server error occurred.");
            }
        },
    });

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <h2 className="text-lg text-[#181b23] primary-font border-b-1 border-[#ccc] pb-2 ml-0 md:-ml-10 mb-6">
                Your Personal Details
            </h2>

            <form className="space-y-4" onSubmit={formik.handleSubmit}>
            
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <label className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>First Name</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                        <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
                    )}
                </div>

              
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <label className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>Last Name</span>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
                    )}
                </div>

              
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <label className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>Email</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                       {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}
                </div>

                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <label className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                       {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-sm">{formik.errors.password}</p>
                    )}
                </div>

              
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <div className="flex ml-0 md:-ml-10 items-center gap-4 mt-6">
                    <button
                        type="submit"
                        className="flex items-center primary-font gap-2 bg-[#181b23] text-white px-6 py-3 rounded-full hover:bg-[#e51515] transition-colors"
                    >
                        <FaUser /> <span className="text-[13px]">CREATE</span>
                    </button>
                    <a href="#" className="text-sm text-gray-700 hover:underline whitespace-nowrap">
                        or Return to Store
                    </a>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
