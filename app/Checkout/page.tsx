"use client";
import { useState } from "react";

import Navbar from "../audiophiles/Navbar";
import Link from "next/link";
import Footer from "../audiophiles/Footer";

export default function Checkbox() {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelected(option);
  };
  return (
    <div className="bg-[#FAFAFA] w-full min-h-screen">
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto pt-10 pb-10">
        <Link href="/">
          <button className="text-[15px] text-black opacity-50 hover:text-[#D87D4A] transition-colors font-medium mb-8">
            Go Back
          </button>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* CHECKOUT FORM */}
          <div className="flex flex-col px-6 py-8 md:p-12 bg-white w-full lg:w-2/3 rounded-md shadow-sm">
            <h1 className="text-[28px] md:text-3xl font-bold mb-10">
              CHECKOUT
            </h1>

            <h4 className="text-[13px] font-bold text-[#D87D4A] tracking-wider mb-4">
              BILLING DETAILS
            </h4>

            <form className="flex flex-col gap-6 w-full">
              <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-xs font-bold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Alexi Ward"
                    className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-xs font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alexi@email.com"
                    className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-xs font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 202-555-0136"
                    className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mt-8">
                <h4 className="text-[13px] font-bold text-[#D87D4A] tracking-wider mb-4">
                  SHIPPING INFO
                </h4>

                <div className="flex flex-col mb-6">
                  <label className="text-xs font-bold mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="1137 Nwakpadolo Estate"
                    className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                  />
                </div>

                <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-xs font-bold mb-2">ZIP Code</label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                    />
                  </div>

                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-xs font-bold mb-2">City</label>
                    <input
                      type="text"
                      placeholder="New York"
                      className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-6">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-xs font-bold mb-2">Country</label>
                    <input
                      type="text"
                      placeholder="Nigeria"
                      className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full mt-8">
                <h4 className="text-[13px] font-bold text-[#D87D4A] tracking-wider mb-4">
                  PAYMENT DETAILS
                </h4>

                <div className="flex flex-col md:flex-row justify-between mt-4 w-full gap-6">
                  <h5 className="font-bold text-[12px] md:w-1/2">
                    Payment Method
                  </h5>

                  <div className="flex flex-col w-full md:w-1/2 space-y-4 font-bold text-[14px]">
                    <div
                      className={`flex gap-4 items-center p-4 rounded-md border cursor-pointer hover:border-[#D87D4A] transition-colors ${
                        selected === "eMoney"
                          ? "border-[#D87D4A]"
                          : "border-[#CFCFCF]"
                      }`}
                      onClick={() => handleSelect("eMoney")}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={selected === "eMoney"}
                        onChange={() => handleSelect("eMoney")}
                        className="accent-[#D87D4A]"
                      />
                      <p>e-Money</p>
                    </div>

                    <div
                      className={`flex gap-4 items-center p-4 rounded-md border cursor-pointer hover:border-[#D87D4A] transition-colors ${
                        selected === "cod"
                          ? "border-[#D87D4A]"
                          : "border-[#CFCFCF]"
                      }`}
                      onClick={() => handleSelect("cod")}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={selected === "cod"}
                        onChange={() => handleSelect("cod")}
                        className="accent-[#D87D4A]"
                      />
                      <p>Cash on Delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              {selected === "eMoney" && (
                <div className="mt-6">
                  <div className="flex flex-col md:flex-row w-full gap-6">
                    <div className="flex flex-col w-full md:w-1/2">
                      <label className="text-xs font-bold mb-2">
                        e-Money Number
                      </label>
                      <input
                        type="number"
                        placeholder="234567890"
                        className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                      />
                    </div>

                    <div className="flex flex-col w-full md:w-1/2">
                      <label className="text-xs font-bold mb-2">
                        e-Money PIN
                      </label>
                      <input
                        type="number"
                        placeholder="2025"
                        className="border border-[#CFCFCF] p-4 rounded-md w-full focus:border-[#D87D4A] outline-none text-[14px] font-bold"
                      />
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* SUMMARY */}
          <div className="p-8 bg-white rounded-md w-full lg:w-1/3 shadow-sm">
            <h1 className="text-[18px] font-bold mb-8 uppercase">Summary</h1>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <p className="font-bold text-[15px]">XX99 MK II</p>
                    <p className="text-[14px] font-bold text-gray-500">
                      $2,999
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 font-bold text-[15px]">x1</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <p className="font-bold text-[15px]">XX59</p>
                    <p className="text-[14px] font-bold text-gray-500">$899</p>
                  </div>
                </div>
                <p className="text-gray-500 font-bold text-[15px]">x2</p>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-gray-500 text-[15px] uppercase">
                <p>Total</p>
                <p className="font-bold text-black">$5,396</p>
              </div>

              <div className="flex justify-between text-gray-500 text-[15px] uppercase">
                <p>Shipping</p>
                <p className="font-bold text-black">$50</p>
              </div>

              <div className="flex justify-between text-gray-500 text-[15px] uppercase">
                <p>VAT (Included)</p>
                <p className="font-bold text-black">$1,079</p>
              </div>

              <div className="flex justify-between mt-6 text-black uppercase">
                <p className="font-bold opacity-50">Grand Total</p>
                <p className="font-bold text-[#D87D4A] text-[18px]">$5,446</p>
              </div>
            </div>

            <button className="w-full mt-8 bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors text-white font-bold py-4 rounded-md uppercase text-[13px] tracking-widest">
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
