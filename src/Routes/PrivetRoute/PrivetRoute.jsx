import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";


const PrivetRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <div>
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    </div>;
};

export default PrivetRoute;