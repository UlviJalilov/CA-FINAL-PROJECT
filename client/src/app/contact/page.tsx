"use client";

import ContactBanner from "@/components/shared/Contactcrumb/banner";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().optional(),
    message: yup.string().required("Message is required"),
    agree: yup.boolean().oneOf([true], "You must agree with terms"),
});


type ContactFormData = {
    name: string;
    email: string;
    phone?: string;
    message: string;
    agree?: boolean;
};


export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            agree: false,
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Something went wrong");

            toast.success("Message sent successfully!");
            reset();
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Failed to send");
            }
        }
    };

    return (
        <div>
            <ContactBanner />
            <div className="bg-white">
                <div className="container mx-auto py-30 px-10 grid md:grid-cols-2 gap-8">
              
                    <div>
                     
                        <div className="w-full h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.2469!2d-83.713!3d42.302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88234b0a!2sUS-ARB-TRAV!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-[20px] font-medium primary-font mb-4">Contact Information</h2>
                            <p className="mb-2 text-[14px] text-[#5a6069]">
                                <span className="font-semibold">Address:</span> 1234 Street Name, City, Country
                            </p>
                            <p className="mb-2 text-[#5a6069] text-[14px]">
                                <span className="font-semibold">Phone:</span> (123) 456-7890
                            </p>
                            <p className="text-[14px] text-[#5a6069]">
                                <span className="font-semibold">Email:</span> email@example.com
                            </p>
                        </div>
                    </div>

                 
                    <div className="bg-gray-50 p-8 rounded shadow-sm">
                        <h2 className="text-lg  primary-font text-[#181b23] mb-6">Leave a Message</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name")}
                                className="border placeholder:text-[13px] text-[14px] font-medium border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                                className="border border-gray-300 placeholder:text-[13px] text-[14px] font-medium rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                            <input
                                type="tel"
                                placeholder="Phone"
                                {...register("phone")}
                                className="border border-gray-300 placeholder:text-[13px] text-[14px] font-medium rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                {...register("message")}
                                className="border border-gray-300 placeholder:text-[13px] text-[14px] font-medium rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}


                            <div className="flex justify-center flex-col gap-8 items-center">
                                <label className="gap-1 flex items-center text-sm">
                                    <input type="checkbox" {...register("agree")} className="accent-black" />
                                    I agree with the terms and conditions.
                                </label>
                                {errors.agree && <p className="text-red-500 text-sm">{errors.agree.message}</p>}


                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#181b23] hover:bg-[#e51515] text-[13px] primary-font text-white  px-9 py-3 rounded-[30px] transition-all w-[100px]"
                                >
                                    {isSubmitting ? "Sending..." : "SEND"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
