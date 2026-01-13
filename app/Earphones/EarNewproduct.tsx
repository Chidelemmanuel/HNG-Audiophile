import Image from "next/image";
import YX1 from "@/public/assets/product-yx1-earphones/desktop/image-product.jpg";
// import ZX7 from "@/public/assets/product-zx7-speaker/desktop/image-product.jpg"
import Display from "../audiophiles/Display";
import Best from "../audiophiles/Best";
import Footer from "../audiophiles/Footer";
import Link from "next/link";

export default function EarNewproduct() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto mt-10 md:mt-24 lg:gap-20">
        <div className="w-full lg:w-1/2 relative h-[352px] md:h-[480px] lg:h-[560px]">
          <span className="relative block h-full w-full">
            <Image
              src={YX1}
              alt="Speaker-Image"
              fill
              className="rounded-md object-cover"
            />
          </span>
        </div>

        <section className="mt-10 lg:mt-0 lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="tracking-[10px] text-[#D87D4A] mb-4 text-[14px] uppercase">
            NEW PRODUCT
          </p>
          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            YX1 WIRELESS
            <br /> EARPHONES
          </h1>
          <p className="font-normal leading-relaxed text-[15px] opacity-50 mb-8 max-w-[570px]">
            Tailor your listening experience with bespoke dynamic drivers{" "}
            <br className="hidden lg:block" />
            from the new YX1 Wireless Earphones. Enjoy incredible{" "}
            <br className="hidden lg:block" />
            high-fidelity sound even in noisy environments with its active{" "}
            <br className="hidden lg:block" />
            noise cancellation feature.
          </p>

          <Link href="/Earphones/productdetails/YX1-EARPHONES">
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
