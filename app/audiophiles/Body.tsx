import Image from "next/image"
import Svg from "../../public/assets/home/desktop/pattern-circles.svg"
import Speaker from "../../public/assets/home/desktop/image-removebg-preview.png"
import Zx7 from "../../public/assets/home/desktop/image-speaker-zx7.jpg"
import Yx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg"
import Display from "./Display"
import Best from "./Best"

export default function Body() {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-[#ffffff] py-9">
                
            <Display />

            <div className="flex flex-col justify-between py-10 w-full m-auto">
                
                <div className="flex justify-between items-center relative z-1 bg-[#D87D4A] mx-auto rounded-md">

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

            <div className="flex flex-col justify-between w-full">
                <div className="relative rounded-md flex items-center m-auto justify-between bg-[#F1F1F1] text-[#000000] font-bold">
                    <section className="absolute top-10 left-20 z-9 mt-10">
                        <h1>ZX7 SPEAKER</h1>

                        <button className="font-bold text-[#000000] border p-2 w-[150px] mt-5">SEE PRODUCT</button>
                    </section>

                    <span className="z-1 rounded-md">
                        <Image src={Zx7} alt="ZX7 Speaker" width={870} className="rounded-md" />
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-between w-full py-10">
                <div className="flex items-center m-auto max-w-[80%]">
                    <section className="w-2xl">
                        <Image src={Yx1} alt ="Yx1 image" width={350} className="rounded-md" />
                    </section>

                    <section className="w-3xl h-50 flex flex-col items-center justify-center bg-[#F1F1F1] text-black rounded-md">
                        <h1 className="font-bold text-[#000000] text-3xl">YX1 EARPHONES</h1>
                        <button className="font-bold text-[#000000] border-2 p-3 bg-[#F1F1F1] mt-5">SEE PRODUCT</button>
                    </section>
                    
                </div>
            </div>
               
            <Best />
            
        </div>
    )
}

