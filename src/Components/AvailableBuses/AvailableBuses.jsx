
import { useQuery } from "react-query";
import AvailableBus from "../AvailableBus/AvailableBus";
import Loading from "../Loading/Loading";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AvailableBuses = () => {
    const [loading, setLoading] = useState(false);
    const { data: allbuses = [], isLoading } = useQuery({
        queryKey: ['allbuses'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/allBus`);
            const data = await res.json();
            return data;
        }
    });



    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { findObj } = useContext(AuthContext);
    const navigate=useNavigate();
    const handleSearch = data => {
        setLoading(true);
        findObj["date"] = data.date;
        findObj["destination"] = data.destination;
        findObj["bustype"] = data.bustype;
        localStorage.setItem('serch_text', JSON.stringify(findObj));
        navigate('/searchBus')
        setLoading(false);
    }
    if (isLoading || loading) {
        return <Loading />
    }
    return (
        <div className="w-[90%]  lg:flex md:flex mx-auto mt-20 justify-center">
            <div className=" p-10 w-[350px] h-[400px] lg:sticky md:sticky lg:top-0 md:top-0  border border-gray-300 my-10">
                <form onSubmit={handleSubmit(handleSearch)}>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="date" className="text-sm font-semibold text-gray-500">Date</label>
                        <input name="date" type="date" {...register("date", { required: "date is required" })} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                        {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="destination" className="text-sm font-semibold text-gray-500">Destination</label>
                        <select name="destination" id="destination" {...register("destination", { required: "destination is required" })} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option value="Dhaka to Feni">Dhaka to Feni</option>
                            <option value="Feni to Dhaka">Feni to Dhaka</option>
                            <option value="Chattrogram to Dhaka">Chattrogram to Dhaka</option>
                            <option value="Dhaka to Chattrogram">Dhaka to Chattrogram</option>
                        </select>
                        {errors.destination && <p className='text-red-600'>{errors.destination?.message}</p>}
                    </div>
                    <div className="flex flex-col space-y-1 my-4">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Bustype</label>
                        <select name="bustype" id="bustype"{...register("bustype", { required: "bustype is required" })} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                            <option>Choose Bus Type</option>
                            <option value="AC">AC</option>
                            <option value="NON AC">NON AC</option>
                        </select>
                        {errors.bustype && <p className='text-red-600'>{errors.bustype?.message}</p>}
                    </div>

                    <div className='flex items-center my-4 lg:mt-4 lg:my-0 md:my-0 lg:ml-[30px] '>
                        <button className='text-white lg:w-[200px] md:w-[200px] w-[260px] h-[40px] bg-[#0245ab] lg:ml-[20px] md:ml-[20px] '>Search</button>
                    </div>
                </form>
            </div>

            <div>
                {
                    allbuses?.slice(0,10).map(bus => <AvailableBus
                        key={bus?._id}
                        bus={bus}
                    ></AvailableBus>)
                }
            </div>

        </div>
    );
};

export default AvailableBuses;