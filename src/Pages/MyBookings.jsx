import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../Components/Loading/Loading";
import SingelBookingBus from "../Components/SingelBookingBus/SingelBookingBus";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    // get my bookings
    const { data: myBookings = [], isLoading } = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/myBookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading />
    }
    console.log(user);
    return (
        <div className="flex w-[90%] mx-auto items-center">
            <div className="p-10 border border-gray-400 h-[300px]">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-500">email</label>
                    <input name="email" value={user?.email} disabled type="email" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex flex-col space-y-1 mt-4">
                    <label htmlFor="displayName" className="text-sm font-semibold text-gray-500">Name</label>
                    <input name="displayName" value={user?.displayName} disabled type="displayName" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex flex-col space-y-1 mt-4">                    
                    <button className="bg-red-800 text-white py-[5px]">Cancel All bookings</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    myBookings?.map(bus => <SingelBookingBus
                        key={bus?._id}
                        bus={bus}
                    ></SingelBookingBus>)
                }
            </div>
        </div>
    );
};

export default MyBookings;