import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import BuySteps from "../Components/BuySteps/BuySteps";
import Amenities from "../Components/Amenities/Amenities";

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
   
   
    return (
        <div>
           <HomeBanner/>
           <BuySteps/>
           <Amenities/>
        </div>
    );
};

export default Home;