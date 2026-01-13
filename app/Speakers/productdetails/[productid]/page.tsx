import Image from "next/image";
import { speaker } from "@/data/speaker";
import Navbar from "@/app/audiophiles/Navbar";
import Link from "next/link";
import Hook from "../Hook";
import Display from "@/app/audiophiles/Display";
import Best from "@/app/audiophiles/Best";
import Footer from "@/app/audiophiles/Footer";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const { productid } = await params;
  const product = speaker.find((item) => item.id === productid);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="bg-[#000000] font-family: [manrope]">
        <Navbar />
      </div>

      <div className="max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto mt-10 md:mt-20">
        <Link href="/Speakers">
          <button className="text-[15px] opacity-50 hover:text-[#D87D4A] transition-colors font-medium mb-8">
            Go Back
          </button>
        </Link>
      </div>

      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto gap-10 md:gap-16 lg:gap-24">
        <div className="w-full md:w-1/2 relative h-[327px] md:h-[480px] lg:h-[560px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <section className="flex flex-col w-full md:w-1/2 text-center md:text-left items-center md:items-start">
          {product.isNew && (
            <div className="tracking-[10px] text-[#D87D4A] mb-4 text-[14px] uppercase">
              NEW PRODUCT
            </div>
          )}

          <h1 className="font-bold text-[28px] md:text-[40px] leading-tight mb-6 uppercase">
            {product.name}
          </h1>

          <div className="opacity-50 text-[15px] leading-relaxed mb-8">
            <p>{product.description}</p>
            <p>{product.description2}</p>
            <p>{product.description3}</p>
            <p>{product.description4}</p>
          </div>

          <h1 className="font-bold text-[18px] tracking-wider mb-8">
            {product.price}
          </h1>

          <div className="flex gap-4">
            <Hook />
            <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
              ADD TO CART
            </button>
          </div>
        </section>
      </div>

      {/* Features & In The Box */}
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-28 max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto mt-20 md:mt-32">
        <section className="w-full lg:w-2/3">
          <h1 className="font-bold text-[24px] md:text-[32px] mb-8 uppercase">
            Features
          </h1>
          <div className="opacity-50 text-[15px] leading-relaxed space-y-4">
            <p>{product.features}</p>
            <p>{product.features2}</p>
          </div>
        </section>

        <section className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-8 md:gap-32 lg:gap-8">
          <h1 className="font-bold text-[24px] md:text-[32px] uppercase mb-0 md:min-w-[200px] lg:min-w-0">
            IN THE BOX
          </h1>

          <div className="flex flex-col gap-2">
            <span className="flex gap-6">
              <h6 className="font-bold text-[#D87D4A]">2x</h6>
              <p className="opacity-50">{product.box1}</p>
            </span>

            <span className="flex gap-6">
              <h6 className="font-bold text-[#D87D4A]">2x</h6>
              <p className="opacity-50">{product.box2}</p>
            </span>

            <span className="flex gap-6">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p className="opacity-50">{product.box3}</p>
            </span>

            <span className="flex gap-6">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p className="opacity-50">{product.box4}</p>
            </span>

            <span className="flex gap-6">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p className="opacity-50">{product.box5}</p>
            </span>
          </div>
        </section>
      </div>

      {/* Gallery */}
      <div className="max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto mt-20 md:mt-32 flex flex-col md:flex-row gap-5 md:gap-8 min-h-[592px]">
        <div className="flex flex-col gap-5 md:gap-8 w-full md:w-[40%]">
          <div className="relative w-full h-[174px] md:h-full flex-1">
            <Image
              src={product.Pic1}
              alt="image"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-full h-[174px] md:h-full flex-1">
            <Image
              src={product.Pic2}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="relative w-full md:w-[60%] h-[368px] md:h-auto">
          <Image
            src={product.Pic3}
            alt={product.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 md:mt-32 max-w-[90%] md:max-w-[80%] 2xl:w-[60%] mx-auto">
        <h1 className="font-bold text-[24px] md:text-[32px] mb-10 md:mb-16 text-center uppercase">
          YOU MAY ALSO LIKE
        </h1>

        <div className="flex flex-col md:flex-row gap-14 md:gap-8">
          <section className="flex flex-col items-center w-full">
            <div className="relative w-full h-[120px] md:h-[318px] mb-8">
              <Image
                src={product.SectionImg3}
                alt="img"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h1 className="font-bold text-[24px] mb-8 uppercase">
              ZX7 SPEAKER
            </h1>
            <Link href="/Speakers/productdetails/ZX7-SPEAKER">
              <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
                SEE PRODUCT
              </button>
            </Link>
          </section>

          <section className="flex flex-col items-center w-full">
            <div className="relative w-full h-[120px] md:h-[318px] mb-8">
              <Image
                src={product.SectionImg}
                alt="img"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h1 className="font-bold text-[24px] mb-8 uppercase">
              XX99 MARK I
            </h1>
            <Link href="/Headphones/productdetails/xx99-mark-i">
              <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
                SEE PRODUCT
              </button>
            </Link>
          </section>

          <section className="flex flex-col items-center w-full">
            <div className="relative w-full h-[120px] md:h-[318px] mb-8">
              <Image
                src={product.SectionImg2}
                alt="img"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h1 className="font-bold text-[24px] mb-8 uppercase">XX59</h1>
            <Link href="/Headphones/productdetails/xx59">
              <button className="font-bold bg-[#D87D4A] hover:bg-[#fbaf85] transition-colors py-3 px-8 text-[13px] text-white uppercase tracking-widest">
                SEE PRODUCT
              </button>
            </Link>
          </section>
        </div>
      </div>

      <div className="mt-24">
        <Display />
        <Best />
        <Footer />
      </div>
    </div>
  );
}
