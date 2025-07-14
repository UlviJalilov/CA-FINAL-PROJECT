"use client";

import { FC, FormEvent } from "react";
import { FaUser } from "react-icons/fa";

const RegisterForm: FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4">

            <h2 className="text-lg text-[#181b23] primary-font border-b-1 border-[#ccc] pb-2 ml-0 md:-ml-10 mb-6">Your Personal Details</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <div className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>First Name</span>
                    </div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <div className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>Last Name</span>
                    </div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Last Name"
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <div className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>Email</span>
                    </div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Email"
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 w-full">
                    <div className="flex items-center gap-1">
                        <span className="text-red-600">*</span>
                        <span>Password</span>
                    </div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Password"
                        className="w-full border placeholder:text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>




                <div className="flex ml-0 md:-ml-10 items-center gap-4 mt-6">
                    <button
                        type="submit"
                        className="flex items-center primary-font gap-2 bg-[#181b23] text-white px-6 py-3 rounded-full hover:bg-[#e51515] transition-colors"
                    >
                        <FaUser /> <span className="text-[13px]">CREATE</span>
                    </button>
                    <a
                        href="#"
                        className="text-sm text-gray-700 hover:underline whitespace-nowrap"
                    >
                        or Return to Store
                    </a>
                </div>
            </form>
        </div>

    );
};

export default RegisterForm;
