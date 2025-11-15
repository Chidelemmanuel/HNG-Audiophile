import Image from "next/image"
import NewHeadset from "../../public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import HeadMark1 from "../../public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import Xx59 from "../../public/assets/product-xx59-headphones/desktop/image-product.jpg";
import Display from "../audiophiles/Display";
import Best from "../audiophiles/Best";
import Footer from "../audiophiles/Footer";
import Link from "next/link"

export default function HeadNewProduct () {
    return (
        <div className="mt-5">
            <div className="flex mt-15 gap-22 items-center max-w-[80%] m-auto px-10 2xl:w-[60%]">

                <div>
                    <span>
                    <Image src={NewHeadset} alt="NewHeadset-Image" width={400} className="rounded-md"  />
                    </span>
                </div>

                <section className="mt-5">
                    <p className="tracking-[10px] text-[#D87D4A]">NEW PRODUCT</p>
                    <h1 className="font-bold text-[40px]">XX99 Mark II  <br /> Headphones</h1>
                    <p className="mt-2 font-normal leading-9">
                        The new XX99 Mark II headphones is the pinnacle of pristine <br />
                        audio. It redefines your premium headphone experience by <br />
                        reproducing the balanced depth and precision of studio-quality <br /> 
                        sound. 
                    </p>

                    <Link href="/Headphones/productdetails/xx99-mark-ii">
                        <button className="font-bold bg-[#D87D4A] p-3 mt-5 text-[13px] text-white">
                            SEE PRODUCT
                        </button>
                    </Link>
                </section>
                
            </div>


            <div className="flex mt-15 gap-22 items-center max-w-[80%] m-auto 2xl:w-[60%]">
                <section className="mt-5 px-10">
                    <h1 className="font-bold text-[40px]">XX99 Mark I <br /> Headphones</h1>
                    <p className="mt-2 font-normal leading-9">
                        As the gold standard for headphones, the classic XX99 Mark I <br /> 
                        offers detailed and accurate audio reproduction for <br /> 
                        audiophiles, mixing engineers, and music aficionados alike in <br /> 
                        studios and on the go. 
                    </p>

                    <Link href="/Headphones/productdetails/xx99-mark-i">
                        <button className="font-bold bg-[#D87D4A] p-3 mt-10 text-[13px] text-white">
                            SEE PRODUCT
                        </button>
                    </Link>
                </section>

                <div>
                    <span>
                    <Image src={HeadMark1} alt="NewHeadset-Image" width={400} className="rounded-md"  />
                    </span>
                </div>
                
            </div>

            <div>

                <div className="flex my-15 gap-22 items-center max-w-[80%] m-auto px-10 2xl:max-w-[60%]">

                    <div>
                        <span>
                        <Image src={Xx59} alt="NewHeadset-Image" width={400} className="rounded-md"  />
                        </span>
                    </div>

                    <section className="mt-5">
                        <h1 className="font-bold text-[40px]">XX59 <br /> Headphones</h1>
                        <p className="mt-2 font-normal leading-9">
                            Enjoy your audio almost anywhere and customize it to your <br /> 
                            specific tastes with the XX59 headphones. The stylish yet <br /> 
                            durable versatile wireless headset is a brilliant companion at <br />
                            home or on the move.
                        </p>

                        <Link href="/Headphones/productdetails/xx59">
                            <button className="font-bold bg-[#D87D4A] p-3 mt-5 text-[13px] text-white">
                                SEE PRODUCT
                            </button>
                        </Link>
                    </section>
                    
                </div>

            </div>

            <div className="space-y-20 mt-10">
                <Display />
                <Best />
                <Footer />
            </div>
        </div>
    )
}