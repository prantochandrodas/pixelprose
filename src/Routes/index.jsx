import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AvailableBuses from "../Components/AvailableBuses/AvailableBuses";
import AddBus from "../Components/AddBus/AddBus";
import SearchBus from "../Components/SearchBus/SearchBus";
import SelectedBusPage from "../Pages/SelectedBusPage";
import MyBookings from "../Pages/MyBookings";
import MyBookedBus from "../Pages/MyBookedBus";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Payment from "../Components/Payment/Payment";


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
          path:'/allbus',
          element:<AvailableBuses/>
        },
        {
          path:"/addBus",
          element:<AddBus/>
        },
        {
          path:'/searchBus',
          element:<SearchBus/>
        },
        {
          path:'/selectedBus/:id',
          element:<PrivetRoute><SelectedBusPage/></PrivetRoute>,
          loader:({params})=>fetch(`https://pixelprose-backend.vercel.app/selectedBus/${params.id}`)
        },
        {
          path:'/myBookedBus/:id',
          element:<MyBookedBus/>,
          loader:({params})=>fetch(`https://pixelprose-backend.vercel.app/myBookedBus/${params.id}`)
        },
        {
          path:'/mybookings',
          element:<PrivetRoute><MyBookings/></PrivetRoute>
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