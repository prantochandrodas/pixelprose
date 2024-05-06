import { BsSearch } from "react-icons/bs";
import { BsTicket } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
const BuySteps = () => {
    return (
        <div className="lg:my-[100px] md:my-[100px] mt-[300px]">
            <h1 className="lg:text-4xl md:text-4xl text-2xl font-[500] text-center">Get your tickets with just 3 steps</h1>

            <div className="flex lg:flex-row md:flex-row  flex-col  items-center justify-center my-10 md:gap-[50px] gap-[30px] lg:gap-[50px]">
                    <div className="flex flex-col justify-center lg:w-[400px] md:w-[400px] w-[90%] mx-auto items-center shadow-2xl border border-lg border-gray-200  h-[300px]">
                        <div className="bg-[#0245ab] w-[70px] text-white h-[70px] flex justify-center items-center rounded-full">
                            <BsSearch />
                        </div>
                        <h2 className="font-[500] text-2xl my-2">Search your ride</h2>
                        <p className="text-sm text-center">Choose your ride,choose date and <br /> search for your ride</p>
                    </div>
                    <div className="flex flex-col justify-center lg:w-[400px] md:w-[400px] w-[90%] mx-auto items-center shadow-2xl border border-lg border-gray-200  h-[300px]">
                        <div className="bg-[#0245ab] w-[70px] text-white h-[70px] flex justify-center items-center rounded-full">
                            <BsTicket />
                        </div>
                        <h2 className="font-[500] text-2xl my-2">Choose your ticket</h2>
                        <p className="text-sm text-center">Choose your origin,destination,just a bus for <br /> your greate journey date and search bus</p>
                    </div>
                    <div className="flex flex-col justify-center lg:w-[400px] md:w-[400px] w-[90%] mx-auto items-center shadow-2xl border border-lg border-gray-200  h-[300px]">
                        <div className="bg-[#0245ab] w-[70px] text-white h-[70px] flex justify-center items-center rounded-full">
                            <FaCcPaypal />
                        </div>
                        <h2 className="font-[500] text-2xl my-2">Pay Bill</h2>
                        <p className="text-sm text-center">Choose your origin,destination,just a bus for <br /> your greate journey date and search bus</p>
                    </div>
            </div>
        </div>
    );
};

export default BuySteps;