import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/logo.svg"
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer () {
    return (
       <div className="flex flex-col mx-auto gap-10 w-full bg-[#000000] text-white p-7">
            <div className="flex mx-auto">
                <Image src={Logo} alt="Logo"/>

                <span className="flex font-bold">
                    <ul className="flex gap-4">
                        <Link href={"/"}><li>HOME</li></Link>
                        <Link href={"/Headphones"}><li>HEADPHONES</li></Link>
                        <Link href={"/Speakers"}><li>SPEAKERS</li></Link>
                        <Link href={"/Earphones"}><li>EARPHONES</li></Link>
                    </ul>
                </span>            
            </div>   

            <div className="flex flex-col mx-10">
                <section className="flex justify-between">
                    <p className="font-medium text-[15px]">
                        Audiophile is an all in one stop to fulfill your audio needs. 
                        We are a small team <br /> of music lovers and sound specialists who are 
                        devoted to helping you get the <br /> most out of personal audio. Come and 
                        visit our demo facility - we’re open 7 <br /> days a week.
                    </p>

                    <span className="flex ">
                        <Facebook color="white" size={40}/>
                        <Twitter color="white" size={40}/>
                        <Instagram color="white" size={40}/>
                    </span>
                </section>

                <section className="mt-10 text-[15px]">
                    <p>Copyright 2025. All Rights Reserved</p>
                </section>      
            </div>
       </div>
    ) 
}
