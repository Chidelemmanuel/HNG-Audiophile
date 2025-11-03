import Navbar from "../audiophiles/Navbar";
import SpeakerNewProduct from "./SpeakerNewProduct";

export default function Speakers () {
    return (
        <div>
            <div className="flex flex-col text-white w-full bg-[#000000] font-family: [manrope] ">
                <Navbar /> 

                <h1 className="text-center font-bold text-[35px] my-10">SPEAKERS</h1>
            </div>

            <SpeakerNewProduct />

        </div>
    )
}