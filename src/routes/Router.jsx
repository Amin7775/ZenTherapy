import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import NewListing from "../pages/newListing/NewListing";
import Search from "../pages/search/Search";
import About from "../pages/About/About";
import Favorites from "../pages/favorites/Favorites";
import HelpCenter from "../pages/helpCenter/HelpCenter";
import Settings from "../pages/settings/Settings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/main",
    element: (
      <PrivateRoute>
        <MainLayout></MainLayout>
      </PrivateRoute>
    ),
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "newlisting",
        element: <NewListing></NewListing>,
      },
      {
        path: "search",
        element: <Search></Search>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "helpcenter",
        element: <HelpCenter></HelpCenter>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);

export default router;
