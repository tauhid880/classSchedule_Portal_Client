import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login";
import Signup from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Schedule from "../Pages/Schedule";
import AddMessage from "../Pages/AddMessage";
import Messages from "../Pages/Messages";

import Profile from "../Pages/Profile/Profile";
import AddClass from "../Pages/AddClass";
import AllTeachers from "../Pages/AllTeachers/AllTeachers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/addmessage",
        element: <AddMessage></AddMessage>,
      },
      {
        path: "/dashboard/messages",
        element: <Messages></Messages>,
      },
      {
        path: "/dashboard/schedule",
        element: <Schedule></Schedule>,
      },
      {
        path: "/dashboard/allteachers",
        element: <AllTeachers></AllTeachers>,
      },
    ],
  },
]);
