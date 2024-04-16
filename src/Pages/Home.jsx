import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log(user);
    const navigate=useNavigate()
    const handelLogout=()=>{
    logOut()
    .then(()=>{
        navigate('/signup')
    })
    }
    return (
        <div>
            <button onClick={handelLogout}>Logout</button>
        </div>
    );
};

export default Home;