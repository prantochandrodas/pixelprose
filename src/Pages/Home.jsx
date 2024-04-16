import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
   
   
    return (
        <div>
           
        </div>
    );
};

export default Home;