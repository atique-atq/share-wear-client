import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NoPageFound from "../../Pages/Shared/NoPageFound/NoPageFound";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute> <Category></Category></PrivateRoute>
            },
            {
                path: '*',
                element: <NoPageFound></NoPageFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // errorElement: <DisplayError></DisplayError>,
        // children: [
        //     {
        //         path: '/dashboard',
        //         element: <MyAppointment></MyAppointment>
        //     },
        //     {
        //         path: '/dashboard/allusers',
        //         element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        //     },
        //     {
        //         path: '/dashboard/adddoctor',
        //         element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        //     },
        //     {
        //         path: '/dashboard/managedoctors',
        //         element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        //     },
        //     {
        //         path: '/dashboard/payment/:id',
        //         element: <Payment></Payment>,
        //         loader: ({ params }) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
        //     },
        // ]
    }
])

export default router;