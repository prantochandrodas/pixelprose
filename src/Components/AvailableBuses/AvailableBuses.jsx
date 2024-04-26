
import { useQuery } from "react-query";
import AvailableBus from "../AvailableBus/AvailableBus";
import Loading from "../Loading/Loading";
const AvailableBuses = () => {

    const { data: allbuses = [], isLoading } = useQuery({
        queryKey: ['allColleges'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/allBus`);
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className="w-[90%] flex justify-center">
            <div className="p-10 w-[350px] border border-gray-300 my-10">
                <form action="">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="date" className="text-sm font-semibold text-gray-500">Date</label>
                        <input type="date" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Destination</label>
                        <select name="" id="" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option value="">Select </option>
                            <option value="">Select </option>
                            <option value="">Select </option>
                            <option value="">Select </option>
                        </select>
                    </div>
                    <div className="flex items-center space-y-1">
                        <label htmlFor="busType" className="text-sm font-semibold text-gray-500">AC</label>
                        <input type="checkbox" className="px-4 py-2 transition duration-300 rounded-full ml-[10px] focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        <label htmlFor="busType" className="text-sm font-semibold text-gray-500 ml-4">NON AC</label>
                        <input type="checkbox" className="px-4 py-2 transition duration-300 rounded-full ml-[10px] focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>

                    <div className='flex items-center my-4 lg:mt-4 lg:my-0 md:my-0 lg:ml-[30px] '>
                        <button className='text-white lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab] lg:ml-[20px] md:ml-[20px] '>Search</button>
                    </div>
                </form>
            </div>

            <div>
                {
                    allbuses?.map(bus => <AvailableBus
                        key={bus?._id}
                        bus={bus}
                    ></AvailableBus>)
                }
            </div>

        </div>
    );
};

export default AvailableBuses;