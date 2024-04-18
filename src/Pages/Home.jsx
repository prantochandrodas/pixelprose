import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
   
   
    return (
        <div>
           <HomeBanner/>
        </div>
    );
};

export default Home;