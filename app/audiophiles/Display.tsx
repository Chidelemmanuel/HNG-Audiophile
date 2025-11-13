import Image from "next/image"
import HEADPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import SPEAKERS from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import EARPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"
import { ChevronRight } from "lucide-react"

export default function Display () {
    return (
        <div className="flex items-center justify-center w-full mt-15">

            <section className="flex gap-30 justify-around max-w-[80%] 2xl:w-[60%]">
                <span className="flex flex-col items-center text-[#000000] relative rounded-md bg-[#F1F1F1] p-10 w-[600px]">
                    <div className="absolute top-[-50] botom-0">
                        <Image src={HEADPHONES} alt="HEADPHONES" width={120} />
                    </div>
                        
                    <h1 className="mt-5 font-bold">HEADPHONES</h1>

                    <div className="flex gap-2 text-center">
                        <p className="text-[13px]">SHOP</p>
                        <ChevronRight  color="#D87D4A" size={20}/>
                    </div>
                </span>

                <span className="flex flex-col items-center text-[#000000] relative rounded-md bg-[#F1F1F1] p-10 w-[600px]">
                    <div className="absolute top-[-40] botom-0">
                        <Image src={SPEAKERS} alt="SPEAKERS" width={120} />
                    </div>
                        
                    <h1 className="mt-5 font-bold">SPEAKERS</h1>

                    <div className="flex gap-2 text-center">
                        <p className="text-[13px]">SHOP</p>
                        <ChevronRight  color="#D87D4A" size={20}/>
                    </div>
                </span>

                <span className="flex flex-col items-center text-[#000000] relative rounded-md bg-[#F1F1F1] p-10 w-[600px]">
                    <div className="absolute top-[-35] botom-0">
                        <Image src={EARPHONES} alt="EARPHONES" width={120} />
                    </div>
                        
                    <h1 className="mt-5 font-bold">EARPHONES</h1>

                    <div className="flex">
                        <p className="text-[13px]">SHOP</p>
                        <ChevronRight  color="#D87D4A" size={20}/>
                    </div>
                </span>

            </section>

        </div>
    )
}