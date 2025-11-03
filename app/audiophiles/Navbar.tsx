import Link from "next/link";
import Image from "next/image";
import Cart from "@/public/assets/carts.svg"
import Logo from "@/public/assets/logo.svg"

export default function Navbar () {
    return (
        <div className="w-full">
            <nav className="flex justify-between py-5 max-w-[80%] mx-auto bg-[#000000] text-white font-bold">
                <Image  src={Logo} alt="lOGO"/>
                <span className="flex">
                    <ul className="flex gap-4">
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/Headphones">HEADPHONES</Link></li>
                        <li><Link href="/Speakers">SPEAKERS</Link></li>
                        <li><Link href="/Earphones">EARPHONES</Link></li>
                    </ul>

                </span>

                <Image  src={Cart} alt="lOGO"/>
                
            </nav>

            <hr className="mx-25" />

        </div>
    )
}