import Image from "next/image"
import YX1 from "@/public/assets/product-yx1-earphones/desktop/image-product.jpg"
// import ZX7 from "@/public/assets/product-zx7-speaker/desktop/image-product.jpg"
import Display from "../audiophiles/Display"
import Best from "../audiophiles/Best"
import Footer from "../audiophiles/Footer"
import Link from "next/link"

export default function EarNewproduct() {
    return (
        <div>
            <div className="flex my-15 justify-between max-w-[80%] m-auto 2xl:w-[60%]">
                <div>
                    <span>
                    <Image src={YX1} alt="Speaker-Image" width={500} className="rounded-md"  />
                    </span>
                </div>

                <section className="mt-25 mx-15">
                    <p className="tracking-[10px] text-[#D87D4A]">NEW PRODUCT</p>
                    <h1 className="font-bold text-[40px]">YX1 WIRELESS<br /> EARPHONES</h1> 
                    <p className="mt-2 font-normal leading-9">
                        Tailor your listening experience with bespoke dynamic drivers <br />
                        from the new YX1 Wireless Earphones. Enjoy incredible <br />
                        high-fidelity sound even in noisy environments with its active <br />
                        noise cancellation feature.
                    </p>

                    <Link href="/Earphones/productdetails/YX1-EARPHONES">
                        <button className="font-bold bg-[#D87D4A] p-3 mt-5 text-[13px] text-white"> SEE PRODUCT </button>
                    </Link>
                </section>
            </div>

            <div className="space-y-20">
                <Display />
                <Best />
                <Footer />
            </div>
        </div>
    )
}