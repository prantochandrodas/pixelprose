import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../Components/Loading/Loading";
import SingelBookingBus from "../Components/SingelBookingBus/SingelBookingBus";
import { toast } from "react-toastify";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    // get my bookings
    const { data: myBookings = [], isLoading ,refetch} = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/myBookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
   
    const deleteSelectedSeat=(id)=>{
        console.log(id)
        fetch(`http://localhost:3000/deleteSelectedSeat/${id}`, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                
                    toast.error('Booking Deleted', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    refetch();
                }

            })
    }

    const deleteAllSelectedSeat=()=>{
        fetch(`http://localhost:3000/deleteAllSelectedSeat/${user?.email}`, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                
                    toast.error('Booking Deleted', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    refetch();
                }

            })
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="flex w-[90%] mx-auto ">
            <div className="p-10 border mt-10 border-gray-400 top-0 sticky h-[300px]">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-500">email</label>
                    <input name="email" value={user?.email} disabled type="email" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex flex-col space-y-1 mt-4">
                    <label htmlFor="displayName" className="text-sm font-semibold text-gray-500">Name</label>
                    <input name="displayName" value={user?.displayName} disabled type="displayName" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex flex-col space-y-1 mt-4">                    
                    <button onClick={deleteAllSelectedSeat} className="bg-red-800 text-white py-[5px]">Cancel All bookings</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    myBookings?.map(bus => <SingelBookingBus
                        key={bus?._id}
                        deleteSelectedSeat={deleteSelectedSeat}
                        bus={bus}
                    ></SingelBookingBus>)
                }
            </div>
        </div>
    );
};

export default MyBookings;