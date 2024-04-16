import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import Loading from "../Components/Loading/Loading";

const Signup = () => {
    const {createUser,updateUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const handelSignup = (data) => {
        setLoading(true);
        createUser(data.email,data.password)
        .then(result=>{
            if(result?.user?.uid){
                console.log('logined sucessfully')
            }
            setLoading(true)
            const image =data.photo[0];
            const formData=new FormData();
            formData.append("image",image)
            console.log(imgHostKey)
            const uri=`https://api.imgbb.com/1/upload?key=${imgHostKey}`;
            fetch(uri,{
                method:'POST',
                body:formData
            }).then(res=>res.json())
            .then(imageData=>{
                const info={
                    displayName:data.name,
                    photoURL:imageData.data.url
                }
                updateUser(info)
                .then(()=>{
                    toast('Sucessfully logined', {
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
                    navigate('/');
                    setLoading(false)
                })
                .catch(error=>console.log(error))
            })
        })
        .catch(error=>console.log(error))
        

    }


    if(loading){
    return <Loading/>        
    }
    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <div className="my-3 text-4xl font-bold tracking-wider text-center">
                        <a href="#">K-WD</a>
                    </div>
                    <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                        With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
                        UI design on us!
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>If you have an account?</span>
                        <Link to="/login" className="underline">Let login</Link>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Signup</h3>
                    <form onSubmit={handleSubmit(handelSignup)} className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="Name" className="text-sm font-semibold text-gray-500">Name</label>
                            <input type="text" {...register("name", { required: "Name Address is required" })} id="Name" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>

                        {/*********************  email field  **********************/}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" id="email" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                            </div>
                            <input {...register("password", { required: "Password Address is required" })} type="password" id="password" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="photo" className="text-sm font-semibold text-gray-500">Image</label>
                            <input type="file"  {...register("photo", { required: "picture is required" })} id="Photo" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                            {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 mb-8 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;