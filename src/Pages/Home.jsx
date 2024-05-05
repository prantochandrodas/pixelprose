import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import BuySteps from "../Components/BuySteps/BuySteps";
import Amenities from "../Components/Amenities/Amenities";
import StickyIcon from "../Components/StickyIcon/StickyIcon";

const Home = () => {
   
   
   
    return (
        <div>
           <HomeBanner/>
           <BuySteps/>
           <Amenities/>
           <StickyIcon/>
        </div>
    );
};

export default Home;