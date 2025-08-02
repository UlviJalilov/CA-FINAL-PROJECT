"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { LuShoppingBag } from "react-icons/lu";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { calculateSubtotal } from "@/utils/cartUtils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { shippingRates, calculateShipping } from "@/utils/shipping";

const Page = () => {
  const { cartItems } = useCart();
  const subtotal = calculateSubtotal(cartItems);
  const [shipping, setShipping] = useState(0);

  const total = subtotal + shipping;

  const formik = useFormik({
    initialValues: {
      email: "",
      country: "",
      city: "",
      postalCode: "",
      firstName: "",
      lastName: "",
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Enter a email address"),
      country: Yup.string().required("Required"),
      city: Yup.string().required("Enter a city"),
      postalCode: Yup.string()
        .required("Enter a ZIP / postal code")
        .test(
          "is-valid-postal-code",
          "Invalid postal code",
          function (value) {
            const { country, city } = this.parent;
            if (!country || !city || !value) return true;
            const result = calculateShipping(country, city, value);
            return !("error" in result);
          }
        ),
      lastName: Yup.string().required("Enter a last name"),
      address: Yup.string().required("Enter an address"),
    }),
    onSubmit: (values) => {
      const result = calculateShipping(
        values.country,
        values.city,
        values.postalCode
      );
      if ("error" in result) {
        toast.error(result.error);
        setShipping(0);
      } else {
        setShipping(result.cost);
        toast.success(`Shipping cost: $${result.cost}`);
      }
    },
  });

  const countries = useMemo(() => Object.keys(shippingRates), []);
  const cities = useMemo(
    () =>
      formik.values.country
        ? Object.keys(shippingRates[formik.values.country] || {})
        : [],
    [formik.values.country]
  );

  return (
    <div className="bg-white">
      <div className="container min-h-screen mx-auto px-20">
        <div className="flex justify-between border-b border-[#ccc] pb-4 items-center py-8">
          <h1 className="text-[23px]">
            Aero - Car Accessories Shopify Theme OS 2.0
          </h1>
          <Link href="/cart">
            <LuShoppingBag size={23} className="text-sky-500" />
          </Link>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* LEFT */}
          <div className="border-r border-gray-200 px-6 py-10">
            <section className="mb-7">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium secondary-font mb-4">
                  Contact
                </h2>
                <Link className="text-blue-400" href="/login">
                  Login
                </Link>
              </div>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className="w-full py-3 outline-none pl-3 border-1 rounded-lg border-[#ccc]"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </section>

            <section className="mb-7">
              <h2 className="text-xl font-medium mb-1">Delivery</h2>
              <div className="space-y-4">
                {/* Country */}
                <div>
                  <label className="text-sm">Country/Region</label>
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border outline-none border-gray-300 rounded-md px-4 py-3 text-sm"
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {formik.touched.country && formik.errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.country}
                    </p>
                  )}
                </div>

                {/* Name Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="firstName"
                      placeholder="First name (optional)"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-gray-300 outline-none pl-3 rounded-md px-4 py-3 text-sm w-full"
                    />
                  </div>
                  <div>
                    <input
                      name="lastName"
                      placeholder="Last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-gray-300 outline-none pl-3 rounded-md px-4 py-3 text-sm w-full"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <input
                    name="address"
                    placeholder="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border border-gray-300 outline-none pl-3 rounded-md px-4 py-3 text-sm"
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.address}
                    </p>
                  )}
                </div>

                {/* City & ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <select
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={!formik.values.country}
                      className="border border-gray-300 outline-none rounded-md px-4 py-3 text-sm w-full"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {formik.touched.city && formik.errors.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="postalCode"
                      placeholder="ZIP code"
                      value={formik.values.postalCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="border border-gray-300 outline-none pl-3 rounded-md px-4 py-3 text-sm w-full"
                    />
                    {formik.touched.postalCode && formik.errors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.postalCode}
                      </p>
                    )}
                  </div>
                  <div></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-1">Payment</h2>
              <p className="text-[#5a6069] text-[15px]">
                All transactions are secure and encrypted.
              </p>
              <button
                type="submit"
                className="w-full mt-4 primary-font tracking-wide hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 bg-[#e51515] text-white py-3"
              >
                Pay Now
              </button>
            </section>
          </div>

          {/* RIGHT */}
          <div className="px-10 py-10">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="text-sm">x{item.quantity ?? 1}</span>
                </div>
              ))}

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="secondary-font">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="secondary-font">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>
                    <span className="text-[#5a6069] text-[12px]">USD</span> $
                    {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Page;
