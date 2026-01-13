import Image from "next/image";
import ZX9 from "@/public/assets/product-zx9-speaker/desktop/image-product.jpg";
import ZX7 from "@/public/assets/product-zx7-speaker/desktop/image-product.jpg";
import Display from "../audiophiles/Display";
import Best from "../audiophiles/Best";
import Footer from "../audiophiles/Footer";
import Link from "next/link";

export default function SpeakerNewProduct() {
  return (
    <div className="w-full mt-10 md:mt-24">
      {/* ITEM 1 - ZX9 */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto gap-10 lg:gap-24 mb-24 lg:mb-40">
        <div className="w-full lg:w-1/2 relative h-[352px] md:h-[480px] lg:h-[560px]">
          <Image
            src={ZX9}
            alt="Speaker-Image"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="tracking-[10px] text-[#D87D4A] mb-4 text-[14px] uppercase">
            NEW PRODUCT
          </p>
          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            ZX9 <br /> SPEAKER
          </h1>
          <p className="font-normal leading-relaxed text-[15px] opacity-50 mb-8 max-w-[570px]">
            Upgrade your sound system with the all new ZX9 active{" "}
            <br className="hidden lg:block" />
            speaker. It’s a bookshelf speaker system that offers truly{" "}
            <br className="hidden lg:block" />
            wireless connectivity -- creating new possibilities for more{" "}
            <br className="hidden lg:block" />
            pleasing and practical audio setups.
          </p>

          <Link href="/Speakers/productdetails/ZX9-SPEAKER">
            <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </Link>
        </section>
      </div>

      {/* ITEM 2 - ZX7 */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto gap-10 lg:gap-24 mb-24 lg:mb-40">
        <div className="w-full lg:w-1/2 relative h-[352px] md:h-[480px] lg:h-[560px]">
          <Image
            src={ZX7}
            alt="NewHeadset-Image"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            ZX7 <br /> SPEAKER
          </h1>
          <p className="font-normal leading-relaxed text-[15px] opacity-50 mb-8 max-w-[570px]">
            Stream high quality sound wirelessly with minimal loss. The ZX7{" "}
            <br className="hidden lg:block" />
            bookshelf speaker uses high-end audiophile components that{" "}
            <br className="hidden lg:block" />
            represents the top of the line powered speakers for home or{" "}
            <br className="hidden lg:block" />
            studio use.
          </p>

          <Link href="/Speakers/productdetails/ZX7-SPEAKER">
            <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
              {" "}
              SEE PRODUCT{" "}
            </button>
          </Link>
        </section>
      </div>

      <div className="mt-24">
        <Display />
        <Best />
        <Footer />
      </div>
    </div>
  );
}
