import Image from "next/image";
import HEADPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SPEAKERS from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EARPHONES from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Display() {
  return (
    <div className="flex items-center justify-center w-full mt-10 md:mt-24">
      <section className="flex flex-col md:flex-row gap-20 md:gap-8 justify-between w-[90%] md:w-[80%] 2xl:w-[60%]">
        {/* HEADPHONES */}
        <div className="group w-full md:w-1/3 relative bg-[#F1F1F1] rounded-md pt-20 pb-6 flex flex-col items-center">
          <div className="absolute -top-14 w-[160px]">
            <Image
              src={HEADPHONES}
              alt="HEADPHONES"
              width={160}
              height={160}
              className="drop-shadow-xl"
            />
          </div>

          <h1 className="mt-2 font-bold tracking-wider text-[15px] md:text-[18px]">
            HEADPHONES
          </h1>

          <Link
            href="/Headphones"
            className="flex items-center gap-3 mt-4 group-hover:text-[#D87D4A] transition-colors"
          >
            <span className="text-[13px] font-bold opacity-50 text-black">
              SHOP
            </span>
            <ChevronRight color="#D87D4A" size={16} />
          </Link>
        </div>

        {/* SPEAKERS */}
        <div className="group w-full md:w-1/3 relative bg-[#F1F1F1] rounded-md pt-20 pb-6 flex flex-col items-center">
          <div className="absolute -top-14 w-[160px]">
            <Image
              src={SPEAKERS}
              alt="SPEAKERS"
              width={160}
              height={160}
              className="drop-shadow-xl"
            />
          </div>

          <h1 className="mt-2 font-bold tracking-wider text-[15px] md:text-[18px]">
            SPEAKERS
          </h1>

          <Link
            href="/Speakers"
            className="flex items-center gap-3 mt-4 group-hover:text-[#D87D4A] transition-colors"
          >
            <span className="text-[13px] font-bold opacity-50 text-black">
              SHOP
            </span>
            <ChevronRight color="#D87D4A" size={16} />
          </Link>
        </div>

        {/* EARPHONES */}
        <div className="group w-full md:w-1/3 relative bg-[#F1F1F1] rounded-md pt-20 pb-6 flex flex-col items-center">
          <div className="absolute -top-14 w-[160px]">
            <Image
              src={EARPHONES}
              alt="EARPHONES"
              width={160}
              height={160}
              className="drop-shadow-xl"
            />
          </div>

          <h1 className="mt-2 font-bold tracking-wider text-[15px] md:text-[18px]">
            EARPHONES
          </h1>

          <Link
            href="/Earphones"
            className="flex items-center gap-3 mt-4 group-hover:text-[#D87D4A] transition-colors"
          >
            <span className="text-[13px] font-bold opacity-50 text-black">
              SHOP
            </span>
            <ChevronRight color="#D87D4A" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
