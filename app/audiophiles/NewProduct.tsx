import Image from "next/image"
import Headset from "../../public/assets/headphones.png";

export default function NewProduct () {
    return (
        <div className="mt-5">
            <div className="flex mt-5 items-center gap-10 justify-between max-w-[80%] m-auto 2xl:w-[60%]">
                <section>
                    <p className="tracking-[10px] text-[#F1F1F1]">NEW PRODUCT</p> 
                    <h1 className="font-bold text-[55px]">XX99 Mark II <br /> Headphones</h1>
                    <p className="mt-5 font-medium leading-9">
                    Experience natural, lifelike audio and exceptional <br /> build
                    quality made for the passionate music <br />
                    enthusiast.
                    </p>

                    <button className="font-bold bg-[#D87D4A] p-2 mt-5 text-[13px]"> SEE PRODUCT </button>
                </section>

                <div>
                    <span>
                    <Image src={Headset} alt="Headset-Image" width={500} />
                    </span>
                </div>
            </div>
        </div>
    )
}