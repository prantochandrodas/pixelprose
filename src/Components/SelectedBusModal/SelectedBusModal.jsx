
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";
import { AuthContext } from "../../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import Loading from "../Loading/Loading";
const SelectedBusModal = ({onClose,selectedBus,selectedSeats}) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const modelRef=useRef();
    const closeModel=(e)=>{
        if(modelRef.current==e.target){
            onClose();
        }
    }
    const [loading,setLoading]=useState(false);
    const {user}=useContext(AuthContext);
    const handelBooking=data=>{
        setLoading(true);
        const bookingInfo={
            bookingId:selectedBus._id,
            bustype:selectedBus.bustype,
            name:data.name,
            email:user?.email,
            time:selectedBus.time,
            destination:selectedBus.destination,
            price:selectedSeats.length*selectedBus.price,
            bookedSeats:selectedSeats,
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
        

        fetch("http://localhost:3000/addbooking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
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
                window.location.reload();
                onClose();
            })
    }

    if(loading){
        return <Loading/>
    }
    return (
        <div ref={modelRef} onClick={closeModel} className="fixed inset-0 bg-black bg-opacity-30 backdrom-blur-sm flex justify-center items-center">
            <div className="flex flex-col gap-[10px]">
                <button onClick={onClose} className="text-[30px] place-self-end"><BiX /></button>
                <div className="bg-white p-4 w-[500px]">
                    <h1 className="text-2xl text-[500]">Confirm your ticket</h1>
                    <form onSubmit={handleSubmit(handelBooking)}>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-500">name</label>
                            <input  {...register("name", { required: "name is required" })} type="text" id="name" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                            <input value={user?.email} disabled {...register("email")} type="email" id="email" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="price" className="text-sm font-semibold text-gray-500">price</label>
                            <input value={selectedSeats.length*selectedBus.price} disabled {...register("price")} type="text" id="price" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {/* {errors.price && <p className='text-red-600'>{errors.price?.message}</p>} */}
                        </div>
                    <button type="submit" className="bg-blue-400 text-white w-[150px] my-4 h-[40px]">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SelectedBusModal;