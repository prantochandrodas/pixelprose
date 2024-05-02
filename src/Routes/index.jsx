import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AvailableBuses from "../Components/AvailableBuses/AvailableBuses";
import AddBus from "../Components/AddBus/AddBus";
import SearchBus from "../Components/SearchBus/SearchBus";
import SelectedBus from "../Components/SelectedBus/SelectedBus";
import SelectedBusPage from "../Pages/SelectedBusPage";
import MyBookings from "../Pages/MyBookings";
import MyBookedBus from "../Pages/MyBookedBus";

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
          element:<SelectedBusPage/>,
          loader:({params})=>fetch(`http://localhost:3000/selectedBus/${params.id}`)
        },
        {
          path:'/myBookedBus/:id',
          element:<MyBookedBus/>,
          loader:({params})=>fetch(`http://localhost:3000/myBookedBus/${params.id}`)
        },
        {
          path:'/mybookings',
          element:<MyBookings/>
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