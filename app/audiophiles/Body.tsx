import { ChevronRight } from "lucide-react"
import Image from "next/image"
// import HEADPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import SPEAKERS from "../../public/assets/home/desktop/image-speaker-zx9.png"
// import Svg from "../../public/assets/home/desktop/pattern-circles.svg"
import EARPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"
import Zx7 from "../../public/assets/home/desktop/image-speaker-zx7.jpg"
import Yx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg"
import Man from "../../public/assets/man.png"
import Display from "./Display"

export default function Body() {
    return (
        <div className="flex flex-col bg-[#ffffff] p-10 mt-20">

            <Display />
            
            <div className="flex bg-[#D87D4A] mx-auto mt-10 rounded-md p-5">

                <span>
                    <Image src={SPEAKERS} alt="Speaker" width={400} />
                    {/* <Image src={Svg} alt="Speaker" width={400} /> */}
                </span> 

                <section className="w-[398px] p-5">

                    <h1 className="font-bold text-[48px]">ZX9 <br /> SPEAKER</h1> 

                    <p className="mt-2"> Upgrade to premium speakers that are <br /> 
                        phenomenally built to deliver truly remarkable <br /> 
                        sound.
                    </p>
                    
                    <button className="font-bold text-white bg-[#000000] p-5 w-[150px] mt-5">SEE PRODUCT</button>
                </section>           

            </div>

            <div className=" flex justify-between bg-[#F1F1F1] mt-10 p-15 text-[#000000] font-bold">
                <section>
                    <h1>ZX7 SPEAKER</h1>

                    <button className="font-bold text-white bg-[#000000] p-5 w-[150px] mt-5">SEE PRODUCT</button>
                </section>

                <span>
                    <Image src={Zx7} alt="ZX7 Speaker" width={400} />
                </span>
            </div>

            <div className="flex mt-10 justify-between">
                <section className="w-[50%]">
                    <Image src={Yx1} alt ="Yx1 image" width={600} />
                </section>

                <section className="w-[50%] bg-[#F1F1F1] text-black text-center">
                    <h1 className="font-bold text-[#000000] mt-25">YX1 EARPHONES</h1>
                    <button className="font-bold text-[#000000] outline-2 bg-[#F1F1F1] p-5 w-[150px] mt-5">SEE PRODUCT</button>
                </section>
            </div>

            <div className="flex justify-between bg-[#ffffff] mt-10">
                <section className="flex flex-col mt-10">
                    
                    <h1 className="text-[#000000] text-[35px] font-bold">BRINGING YOU THE <br /> <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</h1>
                    
                    <p className="text-[#000000] mt-5">Located at the heart of New York City, Audiophile is the premier <br />
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
        </div>
    )
}

