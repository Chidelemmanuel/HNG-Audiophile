import Image from "next/image";
import Svg from "../../public/assets/home/desktop/pattern-circles.svg";
import Speaker from "../../public/assets/home/desktop/image-removebg-preview.png";
import Zx7 from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import Yx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import Display from "./Display";
import Best from "./Best";

export default function Body() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#ffffff] py-9">
      <Display />

      <div className="flex flex-col justify-between py-10 w-full mx-auto mt-10 md:mt-15">
        <div className="flex flex-col lg:flex-row items-center relative z-1 bg-[#D87D4A] mx-auto rounded-md w-[90%] md:w-[80%] 2xl:w-[60%] mt-5 overflow-hidden">
          <div className="relative flex justify-center lg:justify-end lg:w-[50%] pt-14 lg:pt-24 lg:ml-10">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] scale-125 lg:scale-100 lg:top-[-20px] lg:left-[50px] lg:translate-x-0 lg:translate-y-0 opacity-40 lg:opacity-100">
              <Image src={Svg} alt="SVG" width={944} height={944} />
            </span>

            <span className="relative z-10 w-[170px] md:w-[197px] lg:w-[380px] lg:translate-y-[15px]">
              <Image
                src={Speaker}
                alt="Speaker"
                width={380}
                height={460}
                className="object-contain"
              />
            </span>
          </div>

          <section className="p-10 lg:p-20 lg:w-[50%] text-center lg:text-left z-10 flex flex-col items-center lg:items-start text-white">
            <h1 className="font-bold text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] mb-6">
              ZX9 <br /> SPEAKER
            </h1>

            <p className="mb-10 text-[15px] md:text-base opacity-75 max-w-[350px]">
              {" "}
              Upgrade to premium speakers that are <br />
              phenomenally built to deliver truly remarkable <br />
              sound.
            </p>

            <button className="font-bold text-white bg-[#000000] hover:bg-[#4C4C4C] transition-colors py-4 px-8 tracking-widest text-[13px]">
              SEE PRODUCT
            </button>
          </section>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full mt-4 md:mt-8">
        <div className="relative rounded-md flex items-center m-auto justify-between overflow-hidden bg-[#F1F1F1] text-[#000000] font-bold w-[90%] md:w-[80%] 2xl:w-[60%] h-[320px]">
          <div className="absolute inset-0 z-0">
            {/* Using object-cover to ensure image covers the background properly */}
            <Image
              src={Zx7}
              alt="ZX7 Speaker"
              fill
              className="object-cover object-center"
            />
          </div>

          <section className="relative z-10 ml-8 md:ml-24">
            <h1 className="text-[28px] mb-8">ZX7 SPEAKER</h1>

            <button className="font-bold text-[#000000] border-2 border-black hover:bg-black hover:text-white transition-colors py-3 px-8 text-[13px] tracking-widest">
              SEE PRODUCT
            </button>
          </section>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full mt-4 md:mt-8 py-10">
        <div className="flex flex-col md:flex-row items-stretch m-auto gap-4 md:gap-8 w-[90%] md:w-[80%] 2xl:w-[60%]">
          <section className="w-full md:w-1/2 h-[200px] md:h-[320px] relative rounded-md overflow-hidden">
            <Image
              src={Yx1}
              alt="Yx1 image"
              fill
              className="object-cover rounded-md"
            />
          </section>

          <section className="flex flex-col items-center md:items-start justify-center bg-[#F1F1F1] text-black rounded-md w-full md:w-1/2 p-10 md:p-24 h-[200px] md:h-[320px]">
            <h1 className="font-bold text-[#000000] text-[28px] mb-8">
              YX1 EARPHONES
            </h1>
            <button className="font-bold text-[#000000] border-2 border-black hover:bg-black hover:text-white transition-colors py-3 px-8 text-[13px] tracking-widest bg-transparent">
              SEE PRODUCT
            </button>
          </section>
        </div>
      </div>

      <Best />
    </div>
  );
}
