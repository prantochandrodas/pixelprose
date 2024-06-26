import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";

const SingelBookingBus = ({ bus, deleteSelectedSeat }) => {
    var hour = parseInt(bus?.time.split(":")[0]) % 12;
    var timeInAmPm = (hour == 0 ? "12" : hour) + ":" + bus?.time.split(":")[1] + " " + (parseInt(parseInt(bus?.time.split(":")[0]) / 12) < 1 ? "am" : "pm");

    const d = new Date() // today, now
    const presentDate = d.toLocaleDateString('en-CA') // YYYY-MM-DD
    const busAddDate = bus?.date;
    return (
        <div>
            {
            busAddDate>=presentDate
            ?
            <div className="lg:ml-[20px] md:ml-[50px]  lg:w-[800px] md:w-[280px] lg:h-[150px] my-4 p-[20px] border border-gray-300 lg:flex justify-between bg-[white]">
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
                        <p className="text-xl ml-2">{timeInAmPm}</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-[500]">Ticket Price</h1>
                    <p className="text-orange-400 text-xl"> &#2547;{bus?.price}</p>

                </div>
                <div>
                    <div className='flex flex-col gap-4 my-4 md:mt-4 lg:mt-4 lg:my-0 md:my-0'>
                        <Link onClick={() => deleteSelectedSeat(bus?._id)} className='text-white  flex items-center justify-center lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-red-800 text-white'>Cancle Booking</Link>
                        <Link to={`/myBookedBus/${bus?._id}`} className='text-white  flex items-center justify-center lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab]'>See Booking</Link>
                    </div>
                </div>

            </div>
            :
            <div className="lg:ml-[20px] md:ml-[50px]  lg:w-[800px] md:w-[280px] lg:h-[150px] my-4 p-[20px] border border-gray-300 lg:flex justify-between bg-[white]">
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
                        <p className="text-xl ml-2">{timeInAmPm}</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-[500]">Ticket Price</h1>
                    <p className="text-orange-400 text-xl"> &#2547;{bus?.price}</p>

                </div>
                <div>
                    <div className='flex flex-col gap-4 my-4 md:mt-4 lg:mt-4 lg:my-0 md:my-0'>
                        <button disabled className='text-white  flex items-center justify-center lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[gray] text-white'>Booking expired</button>
                        
                    </div>
                </div>

            </div>
            }
            
        </div>

    );
};

export default SingelBookingBus;