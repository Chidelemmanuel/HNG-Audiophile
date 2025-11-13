import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/logo.svg"
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer () {
    return (
       <div className="flex flex-col gap-10 w-full bg-[#000000] text-white p-7">
            <div className="w-full">
                <nav className="flex justify-between py-5 max-w-[80%] mx-auto bg-[#000000] text-white font-bold">
                    <Image  src={Logo} alt="lOGO"/>
                    <span className="flex">
                        <ul className="flex gap-4">
                            <Link href={"/"}><li>HOME</li></Link>
                            <Link href={"/Headphones"}><li>HEADPHONES</li></Link>
                            <Link href={"/Speakers"}><li>SPEAKERS</li></Link>
                            <Link href={"/Earphones"}><li>EARPHONES</li></Link>
                        </ul>
                    </span>

                </nav>
            </div>

            <div className="flex w-full">
                <div className="flex flex-col mx-auto">
                    <section className="flex items-center justify-between gap-105">
                        <p className="font-medium text-[15px]">
                            Audiophile is an all in one stop to fulfill your audio needs. 
                            We are a small team <br /> of music lovers and sound specialists who are 
                            devoted to helping you get the <br /> most out of personal audio. Come and 
                            visit our demo facility - we’re open 7 <br /> days a week.
                        </p>

                        <span className="flex mt-7">
                            <Facebook color="white" size={30}/>
                            <Twitter color="white" size={30}/>
                            <Instagram color="white" size={30}/>
                        </span>
                    </section>

                    <section className="mt-10 text-[15px]">
                        <p>Copyright 2025. All Rights Reserved</p>
                    </section>      
                </div>
            </div>  
        </div>
    ) 
}
