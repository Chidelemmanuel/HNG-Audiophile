import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";
import Body from "./Body";
import Headset from "../../public/assets/headphones.png";

export default function HomePage() {
  return (
    <div className="flex flex-col text-white w-full bg-[#000000] font-family: [manrope]">
      <Navbar />

      <hr className="mx-25" />

      <div className="mt-5">
        <div className="flex mt-5 items-center justify-between max-w-[80%] m-auto">
          <section className="">
            <p className="tracking-[10px] text-[#F1F1F1]">NEW PRODUCT</p>
            <h1 className="font-bold text-[55px]">XX99 Mark II Headphones</h1>
            <p className="mt-5 font-[500] leading-[36px]">
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br />
              enthusiast.
            </p>

            <button className="font-bold bg-[#D87D4A] p-2 mt-5 text-[13px]"> SEE PRODUCT </button>
          </section>

          <div className="">
            <span>
              <Image src={Headset} alt="Headset-Image" width={800} />
            </span>
          </div>
        </div>
      </div>

      <Body />
      <Footer />
    </div>
  );
}
