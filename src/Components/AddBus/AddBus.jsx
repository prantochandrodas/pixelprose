import { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import Loading from "../Loading/Loading";
import AddTodaysAllBus from "./AddTodaysAllBus";


const AddBus = () => {
    const [loading, setLoading] = useState(false);
    
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const handelAddBus = data => {
        console.log(data.time)
        setLoading(true);
        const busInfo = {
            price: data.price,
            bustype: data.bustype,
            date: data.date,
            destination: data.destination,
            time: data.time,
            seat:[
                'A1','A2','A3','A4',
                'B1','B2','B3','B4',
                'C1','C2','C3','C4',
                'D1','D2','D3','D4',
                'E1','E2','E3','E4',
                'F1','F2','F3','F4',
                'G1','G2','G3','G4',
                'H1','H2','H3','H4',
                'I1','I2','I3','I4',
                'J1','J2','J3','J4',
                'H1','H2','H3','H4','H5'
            ]

        }
    
        fetch("https://pixelprose-backend.vercel.app/addBus", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(busInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result == false) {
                    toast.error('Already Added', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setLoading(false)
                }
                if (result.acknowledged == true) {
                    toast.success('Bus Sucessfully Added', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false)
                }
                reset();
            })
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className="w-[80%] mx-auto my-10">
            <AddTodaysAllBus/>
            <h1 className="text-2xl font-[500] mt-10">Or add one by one</h1>
                  <form onSubmit={handleSubmit(handelAddBus)} className="flex flex-col space-y-5">
                {/*********************  email field  **********************/}
                <div className="flex flex-col space-y-1">
                    <label htmlFor="destination" className="text-sm font-semibold text-gray-500">Bus Destination</label>
                    <select name="destination" {...register("destination", { required: "Bus Destination is required" })} id="" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                        <option>Choose Bus Name</option>
                        <option value="Dhaka to Feni">Dhaka to Feni</option>
                        <option value="Feni to Dhaka">Feni to Dhaka</option>
                        <option value="Chattrogram to Dhaka">Chattrogram to Dhaka</option>
                        <option value="Dhaka to Chattrogram">Dhaka to Chattrogram</option>
                    </select>
                </div>

                
                <div className="flex flex-col space-y-1">
                    <label htmlFor="price" className="text-sm font-semibold text-gray-500">price</label>
                    <input {...register("price", { required: "price  is required" })} type="number" id="price" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-500">date</label>
                    <input {...register("date", { required: "date  is required" })} type="date" id="date" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
                </div>
                <div className="flex flex-col space-y-1 w-[100px]">
                    <div className="flex items-center justify-between">
                        <label htmlFor="time" className="text-sm font-semibold text-gray-500">time</label>
                    </div>
                    <input {...register("time", { required: "time  is required" })} type="time" id="time" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    {errors.time && <p className='text-red-600'>{errors.time?.message}</p>}
                </div>
                <div className="flex flex-col space-y-1 w-[200px]">
                    <div className="flex items-center justify-between">
                        <label htmlFor="bustype" className="text-sm font-semibold text-gray-500">Bus Type</label>
                    </div>
                    <select name="bustype" {...register("bustype", { required: "bustype is required" })} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                        <option value="">Choose Bus Type</option>
                        <option value="AC">Ac</option>
                        <option value="NON AC">Non Ac</option>
                    </select>
                    {errors.bustype && <p className='text-red-600'>{errors.bustype?.message}</p>}
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBus;