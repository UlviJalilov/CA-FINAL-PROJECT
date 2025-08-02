'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartBanner from '@/components/shared/CartBanner/CartBanner';
import CartItemRow from '@/components/shared/CartItemRow/CartItemRow';
import { shippingRates } from '@/utils/shipping';
import { useShipping } from '@/hooks/useShipping';
import { calculateSubtotal } from '@/utils/cartUtils';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const { cartItems } = useCart();

  const {
    selectedCountry,
    setSelectedCountry,
    selectedCity,
    setSelectedCity,
    zipCode,
    setZipCode,
    shippingCost,
    cities,
    handleCalculateShipping,
  } = useShipping();

  const subtotal = calculateSubtotal(cartItems);
  const [agreed, setAgreed] = useState(false);



  return (
    <div className="bg-white">
      <CartBanner />

      {cartItems.length === 0 ? (
        <div className="p-25 min-h-[500px] text-left">
          <h1 className="text-[26px] text-[#181b23] pb-1 primary-font font-medium">
            Your cart is currently empty.
          </h1>
          <span className="text-[14px] text-[#5a6069]">
            Continue browsing <span className="text-[#e51515]">here.</span>
          </span>
        </div>
      ) : (
        <div className="container mx-auto px-10 mt-20 py-10">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border border-[#ccc]">
              <thead>
                <tr className="text-[#5a6069] text-[13px]">
                  <th className="p-3 border border-[#ccc]">Image</th>
                  <th className="p-3 border border-[#ccc] text-center">Product Name</th>
                  <th className="p-3 border border-[#ccc] text-center">Quantity</th>
                  <th className="p-3 border border-[#ccc] text-center">Unit Price</th>
                  <th className="p-3 border border-[#ccc] text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-1">
            <details className="border rounded border-[#ccc] overflow-hidden">
              <summary className="font-semibold tracking-wide bg-[#f5f5f5] text-[#181b23] primary-font w-full py-3 px-4 cursor-pointer">
                Special instructions for seller
              </summary>
              <div className="p-4">
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 placeholder:text-[14px] rounded px-3 py-2 focus:outline-none"
                />
              </div>
            </details>

            <details className="border border-[#ccc] rounded">
              <summary className="font-semibold tracking-wide bg-[#f5f5f5] text-[#181b23] primary-font w-full py-3 px-4 cursor-pointer">
                Get shipping estimates
              </summary>
              <div className="space-y-2">
                <p className="text-[14px] pl-4 pt-3 text-[#5a6069] pb-5">
                  Enter your destination to get a shipping estimate.
                </p>
                <div className="pl-20 space-y-3">
                  <div>
                    <label className="block text-sm pb-2 font-medium text-gray-700">
                      <span className="text-red-500">*</span> Country
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      <option value="">Select a country</option>
                      {Object.keys(shippingRates)
                        .sort()
                        .map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm pb-2 font-medium text-gray-700">
                      <span className="text-red-500">*</span> Province
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      <option value="">Select a province</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm pb-2 font-medium text-gray-700">
                      <span className="text-red-500">*</span> Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full border focus:outline-none border-gray-300 rounded px-3 py-2"
                      placeholder="Enter ZIP/Postal Code"
                    />
                  </div>
                </div>

                <button
                  onClick={handleCalculateShipping}
                  className="bg-[#181b23] text-white text-[12px] mb-6 ml-4 mt-3 hover:bg-[#e51515] transition primary-font font-medium px-7 py-3 rounded-[30px]"
                >
                  CALCULATE SHIPPING
                </button>

                {shippingCost !== null && (
                  <p className="text-[14px] text-[#181b23] font-medium ml-6 pb-4">
                    Estimated Shipping Cost:{' '}
                    <span className="text-[#e51515]">${shippingCost.toFixed(2)}</span>
                  </p>
                )}
              </div>
            </details>

            <details className="border h-full border-[#ccc] primary-font rounded">
              <summary className="font-semibold tracking-wide text-[#181b23] py-3 px-4 bg-[#f5f5f5] h-full cursor-pointer">
                Discount Coupon
              </summary>
              <div className="p-4">
                <input
                  type="text"
                  placeholder="50"
                  className="w-full border border-gray-300 placeholder:text-[14px] rounded px-3 py-2 focus:outline-none"
                />
              </div>
            </details>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="flex container flex-col mx-auto px-10 pb-20 justify-center">
          <div className="border border-[#ccc] w-full">
            <table className="w-full text-sm border border-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-[#ccc]">
                  <th colSpan={2} className="text-center py-1 text-[#5a6069] font-medium">
                    <strong>Shipping, taxes, and discounts</strong>{' '}
                    <strong> will be calculated at checkout.</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-2 text-right font-semibold text-[#5a6069] border-r border-gray-300">
                    Subtotal:
                  </td>
                  <td className="p-2 text-right text-base text-[#5a6069]">${subtotal.toFixed(2)}</td>
                </tr>

                <tr className="border-b border-gray-300">
                  <td colSpan={2} className="p-2 text-right">
                    <div className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="accent-black cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700 py-2">
                        I agree with the{' '}
                        <span className="text-[#e51515]">terms and conditions</span>.
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex pt-5 justify-between">
            <button className="bg-[#181b23] primary-font text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition">
              CONTINUE SHOPPING
            </button>
            <Link href={agreed ? '/checkout' : '#'}>
              <button
                onClick={() => {
                  if (!agreed) {
                    toast.error('Please agree to the terms and conditions before proceeding to checkout.');
                  }
                }}
                className="bg-[#181b23] primary-font text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition"
              >
                PROCEED TO CHECK OUT
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
