import Image from "next/image"
import ArrowSign from "../../public/assets/shared/desktop/icon-arrow-right.svg" 
import HEADPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import SPEAKERS from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import EARPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"

export default function Display () {
    return (
        <section className="flex mx-auto gap-25 items-center">
            <span className="text-[#000000] rounded-md bg-[#F1F1F1] p-10 items-center font-bold w-[300px]">
                <Image src={HEADPHONES} alt="HEADPHONES" />
                    
                <h1>HEADPHONES</h1>

                <div className="flex gap-2 text-center">
                    <p className="text-[13px] text-center">SHOP</p>
                    <Image  src={ArrowSign} alt="" />
                </div>
            </span>

            <span className="text-[#000000] rounded-md bg-[#F1F1F1] p-10 items-center font-bold w-[300px]">
                <Image src={SPEAKERS} alt="SPEAKERS" />

                <h1>SPEAKERS</h1>

                <div className="flex gap-2 text-center">
                    <p className="text-[13px] text-center">SHOP</p>
                    <Image  src={ArrowSign} alt="" />
                </div>
            </span>

            <span className="text-[#000000] rounded-md bg-[#F1F1F1] p-10 items-center font-bold w-[300px]">
                <Image src={EARPHONES} alt="EARPHONES" />

                <h1>EARPHONES</h1>

                <div className="flex gap-2 items-center">
                    <p className="text-[13px] text-center">SHOP</p>
                    <Image  src={ArrowSign} alt="" />
                </div>
            </span>

        </section>
    )

}