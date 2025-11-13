// "use client";

// import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import Navbar from "@/app/audiophiles/Navbar";
import Link from "next/link"
import Hook from "../Hook"
import Pic1 from "@/public/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"

export default async function ProductDetails({ 
  params 
}: { 
  params: Promise<{ productid: string }> 
}) {
  const { productid } = await params;
  const product = products.find((item) => item.id === productid);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="flex flex-col w-full">

      <div className="flex flex-col text-white items-center w-full bg-[#000000] font-family: [manrope]">
        <Navbar /> 

        <h1 className="text-3xl font-bold py-12">{product.name}</h1>

      </div>

      <Link href="/Headphones"><button className="p-3 mx-20 text-[15px] text-black">Go Back</button></Link>

      <div className="flex mt-5 items-center gap-100 justify-between max-w-[80%] m-auto 2xl:w-[60%] border">

        <div className="flex gap-16 justify-between mt-10">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={500}
            height={500}
            className="rounded-lg" 
          />

          <section className="flex flex-col mt-10">
            <div>{product.isNew && (
              <div className="tracking-[10px] text-[#D87D4A]">NEW PRODUCT</div>
              )}
            </div>

            <h1 className="font-bold text-[60px]">{product.name}</h1>

            <span className="leading-7 ">
              <p>{product.description}</p>
              <p>{product.description2}</p>
              <p>{product.description3}</p>
              <p>{product.description4}</p>
            </span>
           
            <h1 className="font-bold mt-8">{product.price}</h1>

            <div className="flex gap-6 my-7">
              <Hook />
              <button className="font-bold bg-[#D87D4A] p-3 mt-1 text-[13px] text-white">ADD TO CART</button>
            </div>

          </section>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex mt-15 gap-50 items-center justify-center max-w-[80%] m-auto border">
          <section className="w-170">
            <h1 className="font-bold text-4xl">Features</h1>
            <p className="mt-6 text-[16px]">{product.features}</p> 
            <br />
            <p className="text-[16px]">{product.features2}</p>
          </section>

          <section>
            <h1 className="font-bold text-4xl">IN THE BOX</h1>
            <span className="flex gap-5 mt-3">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p>{product.box1}</p>
            </span>

            <span className="flex gap-5 mt-3">
              <h6 className="font-bold text-[#D87D4A]">2x</h6>
              <p>{product.box2}</p>
            </span>

            <span className="flex gap-5 mt-3">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p>{product.box3}</p>
            </span>

            <span className="flex gap-5 mt-3">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p>{product.box4}</p>
            </span>

            <span className="flex gap-5 mt-3">
              <h6 className="font-bold text-[#D87D4A]">1x</h6>
              <p>{product.box5}</p>
            </span>

          </section>
        </div>
      </div>

      <div className="mt-15 border" >
        <div className="flex item-center m-auto">
          <section>
            <span>
              <Image src={Pic1} alt="image" />
            </span>
          </section>
        </div>
      </div>

    </div>
  );
}