import Image from "next/image";
import NewHeadset from "../../public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import HeadMark1 from "../../public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import Xx59 from "../../public/assets/product-xx59-headphones/desktop/image-product.jpg";
import Display from "../audiophiles/Display";
import Best from "../audiophiles/Best";
import Footer from "../audiophiles/Footer";
import Link from "next/link";

export default function HeadNewProduct() {
  return (
    <div className="w-full mt-10 md:mt-24">
      {/* ITEM 1 - XX99 Mark II */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto gap-10 lg:gap-24 mb-24 lg:mb-40">
        <div className="w-full lg:w-1/2 relative h-[352px] md:h-[480px] lg:h-[560px]">
          <Image
            src={NewHeadset}
            alt="NewHeadset-Image"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="tracking-[10px] text-[#D87D4A] mb-4 text-[14px] uppercase">
            NEW PRODUCT
          </p>
          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="font-normal leading-relaxed text-[15px] opacity-50 mb-8 max-w-[570px]">
            The new XX99 Mark II headphones is the pinnacle of pristine{" "}
            <br className="hidden lg:block" />
            audio. It redefines your premium headphone experience by{" "}
            <br className="hidden lg:block" />
            reproducing the balanced depth and precision of studio-quality{" "}
            <br className="hidden lg:block" />
            sound.
          </p>

          <Link href="/Headphones/productdetails/xx99-mark-ii">
            <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
              SEE PRODUCT
            </button>
          </Link>
        </section>
      </div>

      {/* ITEM 2 - XX99 Mark I */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto gap-10 lg:gap-24 mb-24 lg:mb-40">
        <div className="w-full lg:w-1/2 relative h-[352px] md:h-[480px] lg:h-[560px]">
          <Image
            src={HeadMark1}
            alt="NewHeadset-Image"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Added margin top on mobile only if needed, but flex gap handles it */}
          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            XX99 Mark I <br /> Headphones
          </h1>
          <p className="font-normal leading-relaxed text-[15px] opacity-50 mb-8 max-w-[570px]">
            As the gold standard for headphones, the classic XX99 Mark I{" "}
            <br className="hidden lg:block" />
            offers detailed and accurate audio reproduction for{" "}
            <br className="hidden lg:block" />
            audiophiles, mixing engineers, and music aficionados alike in{" "}
            <br className="hidden lg:block" />
            studios and on the go.
          </p>

          <Link href="/Headphones/productdetails/xx99-mark-i">
            <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
              SEE PRODUCT
            </button>
          </Link>
        </section>
      </div>

      {/* ITEM 3 - XX59 */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto gap-10 lg:gap-24 mb-24 lg:mb-40">
        <div className="w-full lg:w-1/2 relative h-[352px] md:h-[480px] lg:h-[560px]">
          <Image
            src={Xx59}
            alt="NewHeadset-Image"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            XX59 <br /> Headphones
          </h1>
          <p className="font-normal leading-relaxed text-[15px] opacity-50 mb-8 max-w-[570px]">
            Enjoy your audio almost anywhere and customize it to your{" "}
            <br className="hidden lg:block" />
            specific tastes with the XX59 headphones. The stylish yet{" "}
            <br className="hidden lg:block" />
            durable versatile wireless headset is a brilliant companion at{" "}
            <br className="hidden lg:block" />
            home or on the move.
          </p>

          <Link href="/Headphones/productdetails/xx59">
            <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
              SEE PRODUCT
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
