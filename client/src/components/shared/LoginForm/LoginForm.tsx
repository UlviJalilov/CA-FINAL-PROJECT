"use client";

import Link from "next/link";

const LoginForm = () => {
    return (
        <div>
            <div>
                <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white">
                    <h1 className="text-4xl primary-font font-medium text-[#181b23] -ml-10 mb-5 text-left w-full max-w-6xl">
                        Account
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 w-full max-w-6xl">
                       
                        <div className="border h-[250px] text-[#181b23] border-gray-200 p-6  rounded-md flex flex-col justify-between ">
                            <div>
                                <h2 className="text-2xl tracking-wide primary-font font-bold mb-2">New Customer</h2>
                                <p className="font-bold text-[13px] text-[#5a6069] mb-2">Register Account</p>
                                <p className=" text-[#5a6069] text-sm ">
                                    By creating an account you will be able to shop faster, be up to
                                    date on an order’s status, and keep track of the orders you have
                                    previously made.
                                </p>
                            </div>

                            <Link href="/register" className="bg-[#181b23] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#e51515] primary-font text-white px-7 py-3 rounded-full text-[12px] font-semibold w-fit">
                                CONTINUE
                            </Link>
                        </div>

                     
                        <div className="border border-gray-200 p-8 rounded-md">
                            <h2 className="text-2xl text-[#181b23] primary-font font-semibold mb-2">Returning Customer</h2>
                            <p className="font-semibold text-[#5a6069] mb-4">I am a returning customer</p>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm text-[#5a6069] font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#66afe9]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-[#5a6069] font-medium">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#66afe9]"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
                                    <span className="text-gray-600 hover:text-[#e51515]">Forgot your password?</span>
                                    <a href="#" className="text-[#e51515] hover:underline">
                                        Return to Store
                                    </a>
                                </div>

                                <Link href="/#"
                                    type="submit"

                                >
                                    <span className="bg-[#181b23] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#e51515] primary-font text-white px-7 py-3 rounded-full text-[13px] font-semibold inline-block">
                                        SIGN IN
                                    </span>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginForm
