"use client";
import { useState } from "react";

import Navbar from "../audiophiles/Navbar"
import Link from "next/link"

export default function Checkbox () {
    const [selected, setSelected] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelected(option);
  };
    return (
        <div className="bg-[#FAFAFA] w-full">
            <div className="bg-black py-2">
                <Navbar />
            </div>

            <Link href="/"><button className="p-5 mx-30 text-[15px] text-black 2xl:w-[35%]">Go Back</button></Link>

            <div className="flex gap-10 items-start max-w-[80%] m-auto py-10 2xl:w-[60%]">

                <div className="flex flex-col px-10 py-10 bg-white w-full max-w-3xl rounded-md">
                    <h1 className="text-3xl font-bold mb-10">CHECKOUT</h1>

                    <h4 className="text-[13px] font-bold text-[#D87D4A] tracking-wider">
                        BILLING DETAILS
                    </h4>

                    <form className="flex flex-col gap-5 mt-5 w-full">

                        <div className="flex w-full gap-5 mt-5">

                            <div className="flex flex-col w-full">
                                <label className="text-xs font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Alexi Ward"
                                        className="border p-3 rounded-md w-full"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="text-xs font-semibold mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="alexi@email.com"
                                    className="border p-3 rounded-md w-full"
                                />
                            </div>
                                
                        </div>

                        <div className="flex flex-col mt-5">
                            <label className="text-xs font-semibold mb-1">Phone Number</label>
                            <input type="number"
                                placeholder="+1 202-555-0136"
                                className="border p-3 rounded-md w-[50%]"
                            />
                        </div>

                        <div className="flex flex-col w-full mt-5">
                                <h4 className="text-[13px] font-bold text-[#D87D4A] tracking-wider">SHIPPING INFO</h4>

                                <div className="flex flex-col mt-5">
                                    <label className="text-xs font-semibold mb-1">Address</label>
                                    <input
                                        type="text"
                                        placeholder="1137 Nwakpadolo Estate"
                                        className="border p-3 rounded-md w-full"
                                    />
                                </div>

                                <div className="flex w-full gap-5 mt-5">

                                    <div className="flex flex-col w-full">
                                        <label className="text-xs font-semibold mb-1">ZIP Code</label>
                                        <input
                                            type="text"
                                            placeholder="10001"
                                            className="border p-3 rounded-md w-full"
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="text-xs font-semibold mb-1">City</label>
                                        <input
                                            type="text"
                                            placeholder="New York"
                                            className="border p-3 rounded-md w-full"
                                        />
                                    </div>
                                    
                                </div>

                                <div className="flex flex-col mt-5">
                                    <label className="text-xs font-semibold mb-1">Country</label>
                                    <input type="text"
                                        placeholder="Nigeria"
                                        className="border p-3 rounded-md w-[50%]"
                                    />
                                </div>
                        </div>

                        <div className="flex flex-col w-full mt-5">
                            <h4 className="text-[13px] font-bold text-[#D87D4A] tracking-wider">PAYMENT DETAILS</h4>

                            <div className="flex justify-between mt-10 w-full">

                                <h5>Payment Method</h5>

                                <div className="flex flex-col w-[50%] space-y-5 font-semibold">
                                    <div
                                        className={`flex gap-5 items-center p-3 rounded-md border cursor-pointer ${
                                                selected === "eMoney"
                                                    ? "border-[#D87D4A]"
                                                    : "border-gray-400"
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
                                        className={`flex gap-5 items-center p-3 rounded-md border cursor-pointer ${
                                                selected === "cod"
                                                    ? "border-[#D87D4A]"
                                                    : "border-gray-400"
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

                        <div>
                            <div className="flex w-full gap-5 mt-5">

                                <div className="flex flex-col w-full">
                                    <label className="text-xs font-semibold mb-1">e-Money Number</label>
                                    <input
                                        type="number"
                                        placeholder="234567890"
                                            className="border p-3 rounded-md w-full"
                                    />
                                </div>

                                <div className="flex flex-col w-full">
                                    <label className="text-xs font-semibold mb-1">e-Money PIN</label>
                                    <input
                                        type="number"
                                        placeholder="2025"
                                        className="border p-3 rounded-md w-full"
                                    />
                                </div>
                                
                            </div>

                        </div>

                    </form>
                </div>

                <div className="p-8 bg-white rounded-md w-full max-w-sm">
                    <h1 className="text-xl font-bold mb-8">SUMMARY</h1>

                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                                <div>
                                    <p className="font-bold text-sm">XX99 MK II</p>
                                    <p className="text-sm text-gray-500">$2,999</p>
                                </div>
                            </div>
                            <p className="text-gray-500">x1</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                                <div>
                                    <p className="font-bold text-sm">XX59</p>
                                    <p className="text-sm text-gray-500">$899</p>
                                </div>
                            </div>
                            <p className="text-gray-500">x2</p>
                        </div>
                    </div>

                    <div className="mt-10 space-y-3">
                        <div className="flex justify-between text-gray-500 text-sm">
                            <p>TOTAL</p>
                            <p className="font-bold text-black">$5,396</p>
                        </div>

                        <div className="flex justify-between text-gray-500 text-sm">
                            <p>SHIPPING</p>
                            <p className="font-bold text-black">$50</p>
                        </div>

                        <div className="flex justify-between text-gray-500 text-sm">
                            <p>VAT (INCLUDED)</p>
                            <p className="font-bold text-black">$1,079</p>
                        </div>

                        <div className="flex justify-between mt-4 text-black">
                            <p className="font-bold">GRAND TOTAL</p>
                            <p className="font-bold text-[#D87D4A]">$5,446</p>
                        </div>
                    </div>

                    <button className="w-full mt-8 bg-[#D87D4A] text-white font-bold py-3 rounded-md">
                        CONTINUE & PAY
                    </button>
                </div>
            </div>
        </div>
    )
}
