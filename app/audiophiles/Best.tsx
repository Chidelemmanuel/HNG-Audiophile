import Image from "next/image" 
import Man from "../../public/assets/man.png"

export default function Best() {
    return (
        <div className="flex justify-between bg-[#ffffff] mt-10">
            <section className="flex flex-col mt-10">
                    
                <h1 className="text-[#000000] text-[35px] font-bold">BRINGING YOU THE <br /> <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</h1>
                    
                <p className="text-[#000000] mt-5">
                    Located at the heart of New York City, Audiophile is the premier <br />
                    store for high end headphones, earphones, speakers, and audio <br /> 
                    accessories. We have a large showroom and luxury <br /> 
                    demonstration rooms available for you to browse and <br /> 
                    experience a wide range of our products. Stop by our store to <br /> 
                    meet some of the fantastic people who make Audiophile the <br /> 
                    best place to buy your portable audio equipment.
                </p>
            </section>

            <span>
               <Image src={Man} alt="man.png" width={300}/>
            </span>
        </div>
    )
}