import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";

const SingelBookingBus = ({ bus }) => {
    return (
        <div className="lg:ml-[20px] md:ml-[50px]  lg:w-[800px] lg:h-[150px] my-10 p-[20px] border border-gray-300 lg:flex justify-between bg-[white]">
            <div>
                <h1 className="text-2xl font-[500] mb-[10px]">{bus?.destination}<span className="text-sm text-gray-400 ml-2">({bus?.bustype})</span></h1>
                <p className="text-gray-400 mb-[10px]">Seat layout 2 x 2</p>
                <div className="flex items-center text-orange-400 mb-[10px]">
                    <FaBusSimple />
                    <p className="text-sm ml-2">Coach</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-[500]">Time</h1>
                <div className="text-orange-400 flex items-center mb-[10px]">
                    <FaClock />
                    <p className="text-xl ml-2">{bus?.time}</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-[500]">Ticket Price</h1>
                <p className="text-orange-400 text-xl"> &#2547;{bus?.price}</p>

            </div>
            <div>
                <div className='flex flex-col gap-4 my-4 lg:mt-4 lg:my-0 md:my-0'>
                    <Link to={`/selectedBus/${bus?._id}`} className='text-white  flex items-center justify-center lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-red-800 text-white'>Cancle Booking</Link>
                    <Link to={`/selectedBus/${bus?._id}`} className='text-white  flex items-center justify-center lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab]'>Pay</Link>
                </div>
            </div>

        </div>
    );
};

export default SingelBookingBus;