import { FaWifi } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaPrescriptionBottle } from "react-icons/fa";
import { FaGlassMartiniAlt } from "react-icons/fa";
const Amenities = () => {
    return (
        <div>
            <h1 className="lg:text-4xl md:text-4xl text-2xl font-[500] my-4 text-center">Our Amenities</h1>
            <p className="text-md text-center">Have a look at out popular reason.Why you should choose you bus.Just choose a <br /> bus and get a ticket for your greate journey!</p>

            <div className="my-10 lg:flex md:flex grid grid-cols-2 w-[80%] mx-auto lg:w-[100%] gap-[20px] justify-center items-center">
                <div className="w-[100px]">
                    <div className="w-[100px] h-[100px] bg-[#0245ab] text-white flex items-center justify-center rounded-[5px]">
                        <FaWifi />
                    </div>
                    <p className="text-center font-[500]">Wifi</p>
                </div>
                <div className="w-[100px]">
                    <div className="w-[100px] h-[100px] bg-[#0245ab] text-white flex items-center justify-center rounded-[5px]">
                        <FaBed />
                    </div>
                    <p className="text-center font-[500]">Pillow</p>
                </div>
                <div className="w-[100px]">
                    <div className="w-[100px] h-[100px] bg-[#0245ab] text-white flex items-center justify-center rounded-[5px]">
                        <FaPrescriptionBottle />
                    </div>
                    <p className="text-center font-[500]">Water Bottle</p>
                </div>
                <div className="w-[100px]">
                    <div className="w-[100px] h-[100px] bg-[#0245ab] text-white flex items-center justify-center rounded-[5px]">
                        <FaGlassMartiniAlt />
                    </div>
                    <p className="text-center font-[500]">Soft Drinks</p>
                </div>

            </div>
        </div>
    );
};

export default Amenities;