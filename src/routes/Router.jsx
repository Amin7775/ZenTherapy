import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

const router =createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path: "/",
                element: <Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"/main",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"home",
                element:<Home></Home>
            }
        ]
    }
])


export default router;