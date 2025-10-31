import Link from "next/link";
import Image from "next/image";
import Cart from "@/public/assets/carts.svg"
import Logo from "@/public/assets/logo.svg"

export default function Navbar () {
    return (
        <nav className="flex justify-around w-full bg-[#000000] text-white p-7 font-bold">
            <Image  src={Logo} alt="lOGO"/>
            <span className="flex">
                <ul className="flex gap-4">
                   
                    <Link href={"/"}><li>HOME</li></Link>
                    <Link href={"/Headphones"}><li>HEADPHONES</li></Link>
                    <Link href={"/Speakers"}><li>SPEAKERS</li></Link>
                    <Link href={"/Earphones"}><li>EARPHONES</li></Link>
                </ul>
            </span>

            <Image  src={Cart} alt="lOGO"/>

        </nav>
    )
}