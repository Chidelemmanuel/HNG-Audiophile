import Image from "next/image"
import ZX9 from "@/public/assets/product-zx9-speaker/desktop/image-product.jpg"
import ZX7 from "@/public/assets/product-zx7-speaker/desktop/image-product.jpg"
import Display from "../audiophiles/Display"
import Best from "../audiophiles/Best"
import Footer from "../audiophiles/Footer"
import Link from "next/link"

export default function SpeakerNewProduct() {
    return (
        <div>
            <div className="flex mt-15 justify-between max-w-[80%] m-auto 2xl:w-[60%]">

                <div>
                    <span>
                    <Image src={ZX9} alt="Speaker-Image" width={500} className="rounded-md"  />
                    </span>
                </div>

                <section className="mt-25 mx-20">
                    <p className="tracking-[10px] text-[#D87D4A]">NEW PRODUCT</p>
                    <h1 className="font-bold text-[40px]">ZX9 <br /> SPEAKER</h1>
                    <p className="mt-2 font-normal leading-9">
                        Upgrade your sound system with the all new ZX9 active <br /> 
                        speaker. It’s a bookshelf speaker system that offers truly <br />
                        wireless connectivity -- creating new possibilities for more <br />
                        pleasing and practical audio setups.
                    </p>
                    
                    <Link href="/Speakers/productdetails/ZX9-SPEAKER">
                        <button className="font-bold bg-[#D87D4A] p-3 mt-5 text-[13px] text-white"> SEE PRODUCT </button>
                    </Link>
                </section>
            </div>

            <div className="flex my-25 gap-1 justify-between max-w-[80%] m-auto 2xl:w-[60%]">

                <section className="mt-25 mx-15">
                    <h1 className="font-bold text-[40px]">ZX7 <br /> SPEAKER</h1>
                    <p className="mt-2 font-normal leading-9">
                        Stream high quality sound wirelessly with minimal loss. The ZX7 <br /> 
                        bookshelf speaker uses high-end audiophile components that <br />
                        represents the top of the line powered speakers for home or <br /> 
                        studio use.
                    </p>

                    <Link href="/Speakers/productdetails/ZX7-SPEAKER">
                        <button className="font-bold bg-[#D87D4A] p-3 mt-10 text-[13px] text-white"> SEE PRODUCT </button>
                    </Link>
                </section>

                <div>
                    <span>
                    <Image src={ZX7} alt="NewHeadset-Image" width={500} className="rounded-md"  />
                    </span>
                </div>
                
            </div>

            <div className="space-y-20">
             <Display />
              <Best />
             <Footer />
            </div>
        </div>
    )
}