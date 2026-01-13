"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartImg from "@/public/assets/carts.svg";
import Logo from "@/public/assets/logo.svg";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, isMenuOpen]);

  return (
    <div className="w-full relative bg-[#000000] border-b border-white/10">
      <nav className="flex justify-between items-center py-8 px-6 md:px-0 max-w-full md:max-w-[80%] 2xl:w-[60%] mx-auto text-white font-bold">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Logo - Centered on mobile if desired, or left aligned. Keeping order for now */}
        <span className="md:ml-0">
          <Image src={Logo} alt="lOGO" />
        </span>

        {/* Desktop Nav */}
        <span className="hidden md:flex">
          <ul className="flex gap-8 tracking-[2px] text-[13px] font-bold">
            <li className="hover:text-[#D87D4A] transition-colors">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:text-[#D87D4A] transition-colors">
              <Link href="/Headphones">HEADPHONES</Link>
            </li>
            <li className="hover:text-[#D87D4A] transition-colors">
              <Link href="/Speakers">SPEAKERS</Link>
            </li>
            <li className="hover:text-[#D87D4A] transition-colors">
              <Link href="/Earphones">EARPHONES</Link>
            </li>
          </ul>
        </span>

        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <Image src={CartImg} alt="cart-img" />
        </button>
      </nav>

      {/* MOBILE MENU MODAL */}
      {isMenuOpen && (
        <>
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden top-[90px]"
          />
          <div className="absolute left-0 right-0 top-[90px] bg-white z-50 p-6 md:hidden rounded-b-lg">
            <ul className="flex flex-col gap-4 items-center">
              <li className="w-full">
                <Link
                  href="/Headphones"
                  className="block text-black font-bold uppercase text-center bg-gray-100 py-10 rounded-lg relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Headphones</span>
                  <div className="text-[10px] text-gray-500 flex items-center justify-center gap-1 mt-2">
                    SHOP <span className="text-[#D87D4A]">{">"}</span>
                  </div>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/Speakers"
                  className="block text-black font-bold uppercase text-center bg-gray-100 py-10 rounded-lg relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Speakers</span>
                  <div className="text-[10px] text-gray-500 flex items-center justify-center gap-1 mt-2">
                    SHOP <span className="text-[#D87D4A]">{">"}</span>
                  </div>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/Earphones"
                  className="block text-black font-bold uppercase text-center bg-gray-100 py-10 rounded-lg relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Earphones</span>
                  <div className="text-[10px] text-gray-500 flex items-center justify-center gap-1 mt-2">
                    SHOP <span className="text-[#D87D4A]">{">"}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* CART MODAL */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-gray-500/20 z-40"
          />

          {/* Modal */}
          <div className="absolute right-6 sm:right-20 top-24 w-[90%] sm:w-[400px] bg-[#FAFAFA] shadow-lg rounded-lg p-6 z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-black">CART (0)</h2>
              <button className="text-sm underline text-[#000000]">
                Remove all
              </button>
            </div>

            <div className="flex justify-between my-10">
              <span className="font-semibold text-[#c0b9b9]">TOTAL</span>
              <span className="text-black font-bold">$0</span>
            </div>

            <Link
              href="/Checkout"
              className="flex items-center justify-center w-full py-3 bg-[#D87D4A] text-white mt-6 rounded-md font-bold"
              onClick={() => setIsCartOpen(false)}
            >
              CHECKOUT
            </Link>
          </div>
        </>
      )}
      {/* Removed fixed hr here as it might break flow, replaced with border-b on parent container */}
    </div>
  );
}
