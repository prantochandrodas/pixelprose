import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
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