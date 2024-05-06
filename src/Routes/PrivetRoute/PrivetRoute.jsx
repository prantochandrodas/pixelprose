import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <Loading/>
    }
   
    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivetRoute;