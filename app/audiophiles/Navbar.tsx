"use client"

import { useState, useEffect } from "react"
import Link from "next/link";
import Image from "next/image";
import CartImg from "@/public/assets/carts.svg"
import Logo from "@/public/assets/logo.svg"

export default function Navbar () {
    const [isCartOpen, setIsCartOpen] = useState(false);

     useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartOpen]);
    
    return (
        <div className="w-full relative">
            <nav className="flex justify-between py-5 max-w-[80%] mx-auto bg-[#000000] text-white font-bold 2xl:w-[60%]">
                <Image  src={Logo} alt="lOGO"/>
                <span className="flex">
                    <ul className="flex gap-4">
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/Headphones">HEADPHONES</Link></li>
                        <li><Link href="/Speakers">SPEAKERS</Link></li>
                        <li><Link href="/Earphones">EARPHONES</Link></li>
                    </ul>

                </span>

                <button onClick={() => setIsCartOpen(!isCartOpen)}>
                    <Image src={CartImg} alt="cart-img" />
                </button>

            </nav>

            {/* CART MODAL */}
            {isCartOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setIsCartOpen(false)}  className="fixed inset-0 bg-gray-500/20 z-40"
                    />

                    {/* Modal */}
                    <div className="absolute right-35 top-24 w-[400px] bg-[#FAFAFA] shadow-lg rounded-lg p-6 z-50">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-xl text-black">CART (0)</h2>
                            <button className="text-sm underline text-[#000000]">Remove all</button>
                        </div>

                        <div className="flex justify-between my-10">
                            <span className="font-semibold text-[#c0b9b9]">TOTAL</span>
                            <span className="text-black font-bold">$0</span>
                        </div>

                        <Link href="/Checkout" className="flex items-center justify-center w-full py-3 bg-[#D87D4A] text-white mt-6 rounded-md font-bold">
                            CHECKOUT
                        </Link>
                    </div>
                </>
            )}

            <hr className="mx-25" />

        </div>
    )
}