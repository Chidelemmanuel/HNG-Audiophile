import Navbar from "../audiophiles/Navbar";
import HeadNewProduct from "./HeadNewproduct";

export default function Headphones() {
    return (
        <div>
            <div className="flex flex-col text-white w-full bg-[#000000] font-family: [manrope] ">
                <Navbar /> 

                <h1 className="text-center font-bold text-[35px] my-10">HEADPHONES</h1>
            </div>

            <HeadNewProduct />

        </div>
    )
}