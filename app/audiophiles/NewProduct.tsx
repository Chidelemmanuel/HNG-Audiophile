import Image from "next/image";
import Headset from "../../public/assets/headphones.png";

export default function NewProduct() {
  return (
    <div className="w-full bg-[#191919] sm:bg-transparent">
      {" "}
      {/* Added darker bg for mobile hero feel if needed, usually generic black/grey for this brand */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto pt-24 lg:pt-0 pb-16 lg:pb-0 gap-10 lg:gap-0 relative z-10">
        <section className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="tracking-[10px] text-[#F1F1F1] opacity-50 text-sm mb-4">
            NEW PRODUCT
          </p>
          <h1 className="font-bold text-[36px] md:text-[55px] leading-tight uppercase">
            XX99 Mark II <br className="hidden md:block" /> Headphones
          </h1>
          <p className="mt-6 font-medium text-[15px] opacity-75 max-w-[350px] lg:max-w-[350px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 mt-10 text-[13px] uppercase tracking-widest text-white">
            {" "}
            SEE PRODUCT{" "}
          </button>
        </section>

        <div className="order-1 lg:order-2 w-full lg:w-auto flex justify-center">
          <span className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Assuming Headset is the hero image. It might be big. Using standard Image prop */}
            <Image
              src={Headset}
              alt="Headset-Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
