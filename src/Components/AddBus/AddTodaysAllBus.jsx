import { Bounce, toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { useForm } from "react-hook-form";


const AddTodaysAllBus = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
     const handelAddMultiBus = (data) => {
        
        const busInfo = [
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Feni",
                time: "10:00",
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
    
            }, 
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Feni",
                time: "10:30",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Feni",
                time: "11:00",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Feni",
                time: "11:30",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Feni",
                time: "00:00",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Feni to Dhaka",
                time: "10:00",
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
    
            }, 
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Feni to Dhaka",
                time: "10:30",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Feni to Dhaka",
                time: "11:00",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Feni to Dhaka",
                time: "11:30",
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
    
            },
            {
                price: 500,
                bustype: "NON AC",
                date: data.date,
                destination: "Feni to Dhaka",
                time: "00:00",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Chattrogram to Dhaka",
                time: "10:00",
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
    
            }, 
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Chattrogram to Dhaka",
                time: "10:30",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Chattrogram to Dhaka",
                time: "11:00",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Chattrogram to Dhaka",
                time: "11:30",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Chattrogram to Dhaka",
                time: "00:00",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Chattrogram",
                time: "10:00",
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
    
            }, 
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Chattrogram",
                time: "10:30",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Chattrogram",
                time: "11:00",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Chattrogram",
                time: "11:30",
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
    
            },
            {
                price: 700,
                bustype: "NON AC",
                date: data.date,
                destination: "Dhaka to Chattrogram",
                time: "00:00",
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
        ]
    
        fetch("https://pixelprose-backend.vercel.app/addMultiBus", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(busInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
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
        <div>
            <h1 className="text-2xl font-[500] mb-2">Add regular shaduled buses</h1>
            <form onSubmit={handleSubmit(handelAddMultiBus)} className="flex flex-col space-y-5">
        

                <div className="flex flex-col space-y-1">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-500">date</label>
                    <input {...register("date", { required: "date  is required" })} type="date" id="date" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                    {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
                </div>
              
                <div>
                    <button type="submit" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodaysAllBus;