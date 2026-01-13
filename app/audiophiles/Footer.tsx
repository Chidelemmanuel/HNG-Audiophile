import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-10 w-full bg-[#000000] text-white p-7 md:p-14 relative z-10">
      {/* Orange Bar */}
      <div className="absolute top-0 left-6 md:left-[10%] w-[100px] h-1 bg-[#D87D4A]"></div>

      <div className="w-full flex justify-center">
        <nav className="flex flex-col lg:flex-row items-center lg:items-start justify-between py-5 w-full max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto bg-[#000000]">
          <div className="mb-8 lg:mb-0">
            <Image src={Logo} alt="lOGO" />
          </div>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-bold tracking-[2px] text-[13px]">
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
        </nav>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex flex-col w-full max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto">
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">
            <p className="font-medium text-[15px] text-[#ffffff] opacity-50 text-center lg:text-left max-w-[540px] leading-relaxed">
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>

            <div className="flex flex-col items-center lg:items-end gap-10 lg:gap-20 w-full lg:w-auto mt-10 lg:mt-0">
              <div className="flex gap-4">
                <Facebook
                  color="white"
                  size={24}
                  className="hover:text-[#D87D4A] cursor-pointer"
                />
                <Twitter
                  color="white"
                  size={24}
                  className="hover:text-[#D87D4A] cursor-pointer"
                />
                <Instagram
                  color="white"
                  size={24}
                  className="hover:text-[#D87D4A] cursor-pointer"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 text-[15px] text-[#ffffff] opacity-50 font-bold text-center lg:text-left">
            <p>Copyright 2025. All Rights Reserved</p>
          </section>
        </div>
      </div>
    </div>
  );
}
