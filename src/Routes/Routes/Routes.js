import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError"
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct";
import SellerRoute from "../SellerRoute/SellerRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            //     {
            //         path: '/dashboard',
            //         element: <MyAppointment></MyAppointment>
            //     },
            //     {
            //         path: '/dashboard/allusers',
            //         element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            //     },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            //     {
            //         path: '/dashboard/managedoctors',
            //         element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            //     },
            //     {
            //         path: '/dashboard/payment/:id',
            //         element: <Payment></Payment>,
            //         loader: ({ params }) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            //     },
        ]
    }
])

export default router;