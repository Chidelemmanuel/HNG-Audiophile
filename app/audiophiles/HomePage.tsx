import Footer from "./Footer";
import Navbar from "./Navbar";
// import Headset from "../../public/assets/headphones.png"
import Image from "next/image";
import Body from "./Body";
import Headset from "../../public/assets/home/desktop/image-hero.jpg"

export default function HomePage () {
    return (
        <div className="flex flex-col text-white  bg-[#000000] font-family: [manrope]">
            <Navbar />

            <hr className="mx-35"/>

            <div className="flex p-5">
                <section className=" mx-auto flex justify-between flex-col w-[398px]">
                    <p className="tracking-[10px] text-[#F1F1F1]">NEW PRODUCT</p>
                    <h1 className="font-bold text-[48px]">XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio 
                        and exceptional <br /> build quality made for the 
                        passionate music <br />
                        enthusiast.
                    </p>

                    <button className="font-bold bg-[#D87D4A] p-5 w-[150px] mt-5">SEE PRODUCT</button>
                </section>

                <span>
                    <Image src={Headset} alt="Headset-Image" width={400} />
                </span>
            </div>

            <Body />

            <Footer />
        </div>
    )
}