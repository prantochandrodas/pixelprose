import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import AvailableBus from "../AvailableBus/AvailableBus";


const SearchBus = () => {
    const getText = localStorage.getItem('serch_text');

    const searchValue = (JSON.parse(getText));

    const { data: findbus = [searchValue.destination,searchValue.date,searchValue.bustype], isLoading } = useQuery({
        queryKey: ['searchBus'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/searchBus?destination=${searchValue.destination}&&date=${searchValue.date}&&bustype=${searchValue.bustype}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(findbus)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="w-[90%] lg:flex md:flex mx-auto mt-20 justify-center">
            <div className=" p-10 w-[350px] border border-gray-300 my-10">
                <form action="">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="date" className="text-sm font-semibold text-gray-500">Date</label>
                        <input type="date" value={searchValue.date} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Destination</label>
                        <select name="" id="" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option value={searchValue.destination}>{searchValue.destination}</option>
                            {
                                findbus?.map(bus => <option key={bus._id} className={bus?.destination == searchValue.destination ? 'hidden' : ''} value={bus?.destination}>{bus?.destination}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Bustype</label>
                        <select name="" id="" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option value={searchValue.bustype}>{searchValue.bustype}</option>
                            {
                                findbus?.map(bus => <option key={bus._id} className={bus?.bustype == searchValue.bustype ? 'hidden' : ''} value={bus?.bustype}>{bus?.bustype}</option>)
                            }
                        </select>
                    </div>

                    <div className='flex items-center my-4 lg:mt-4 lg:my-0 md:my-0 lg:ml-[30px] '>
                        <button className='text-white lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab] lg:ml-[20px] md:ml-[20px] '>Search</button>
                    </div>
                </form>
            </div>

            <div className="lg:w-[800px]">
                {
                    findbus?.length > 0 ?
                        <div>
                            {
                                findbus?.map(bus => <AvailableBus
                                    key={bus?._id}
                                    bus={bus}
                                ></AvailableBus>)
                            }
                        </div>
                        :
                        <h1 className="text-3xl text-center font-[500]">No bus found</h1>
                }
            </div>


        </div>
    );
};

export default SearchBus;