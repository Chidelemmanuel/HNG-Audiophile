import Image from "next/image"
import Svg from "../../public/assets/home/desktop/pattern-circles.svg"
import Speaker from "../../public/assets/home/desktop/image-removebg-preview.png"
import EARPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"
import Zx7 from "../../public/assets/home/desktop/image-speaker-zx7.jpg"
import Yx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg"
import Display from "./Display"
import Best from "./Best"

export default function Body() {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-[#ffffff] py-9">
                
            <Display />

            <div className="flex flex-col justify-between py-10 w-full m-auto">
                
                <div className="flex justify-between tems-center relative z-1 bg-[#D87D4A] mx-auto rounded-md">

                    <div className="relative">
                        <span>
                            <Image src={Svg} alt="Speaker" width={450} />
                        </span> 

                        <span className="absolute top-28 left-[35] z-2">
                            <Image src={Speaker} alt="Speaker" width={300} />
                        </span>
                    </div>

                    <section className="p-10 mt-10">

                        <h1 className="font-bold text-[48px]">ZX9 <br /> SPEAKER</h1> 

                        <p className="mt-2"> Upgrade to premium speakers that are <br /> 
                            phenomenally built to deliver truly remarkable <br /> 
                            sound.
                        </p>
                        
                        <button className="font-bold text-white bg-[#000000] p-5 w-[150px] mt-5">SEE PRODUCT</button>
                    </section>           

                </div>
            </div>

            <div className="flex flex-col justify-between py-10 w-full border-2 border-black">
                <div className="border-2 border-black relative flex items-center m-auto justify-between bg-[#F1F1F1] text-[#000000] font-bold">
                    <section className="z-[-5]">
                        <h1>ZX7 SPEAKER</h1>

                        <button className="font-bold text-[#000000] border-2 p-2 w-[150px] mt-5">SEE PRODUCT</button>
                    </section>

                    <span className="z-1">
                        <Image src={Zx7} alt="ZX7 Speaker" width={900} />
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

                <Best />

            </div>
            
        </div>
       
    )
}

