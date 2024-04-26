import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AvailableBuses from "../Components/AvailableBuses/AvailableBuses";
import AddBus from "../Components/AddBus/AddBus";
import SearchBus from "../Components/SearchBus/SearchBus";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/buses',
          element:<AvailableBuses/>
        },
        {
          path:"/addBus",
          element:<AddBus/>
        },
        {
          path:'/searchBus',
          element:<SearchBus/>
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ]);
  export default router;