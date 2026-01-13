import Image from "next/image";
import Man from "../../public/assets/man.png";

export default function Best() {
  return (
    <div className="flex flex-col justify-between w-full mt-20 mb-20 md:mt-24 md:mb-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8 bg-[#ffffff] m-auto max-w-[90%] md:max-w-[80%] 2xl:w-[60%]">
        <section className="flex flex-col justify-center text-center lg:text-left lg:w-1/2">
          <h1 className="text-[#000000] text-[28px] md:text-[40px] uppercase font-bold leading-tight mb-8">
            BRINGING YOU THE <br className="hidden md:block" />{" "}
            <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
          </h1>

          <p className="text-[#000000] opacity-50 text-[15px] font-normal leading-relaxed">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </section>

        <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[588px] rounded-md overflow-hidden">
          <Image
            src={Man}
            alt="man wearing headphones"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
