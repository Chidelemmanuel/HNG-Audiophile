import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/logo.svg"


export default function Footer () {
    return (
        <div className="flex justify-around w-full bg-[#000000] text-white p-7">
            <Image src={Logo} alt="Logo"/>

            <span className="flex">
                <ul className="flex gap-4">
                   
                    <Link href={"/"}><li>HOME</li></Link>
                    <Link href={"/Headphones"}><li>HEADPHONES</li></Link>
                    <Link href={"/Speakers"}><li>SPEAKERS</li></Link>
                    <Link href={"/Earphones"}><li>EARPHONES</li></Link>
                </ul>
            </span>
        </div>        
    ) 
}