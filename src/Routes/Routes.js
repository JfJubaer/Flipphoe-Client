import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Main from "../LayOut/Main";
import AddProducts from "../Pages/AddProducts/AddProducts";
import CatProducts from "../Pages/CatProducts.js/CatProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Products from "../Pages/Products/Products";
import NoRoute from "./NoRoute";
import MyProducts from "../Pages/AddProducts/MyProducts";
import MyOrders from "../Pages/MyOrders/MyOrders"
import Admin from "../Pages/Admin/Admin"
import Admin2 from "../Pages/Admin/Admin2"
import PrivateRoute from "../Routes/PrivateRoute"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/products",
        element: <PrivateRoute><Products></Products></PrivateRoute>,
      },
      {
        path: "/addproducts",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: "/myproducts",
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
      },
      {
        path: "/admin",
        element: <PrivateRoute><Admin></Admin></PrivateRoute>,
      },
      {
        path: "/admin2",
        element: <PrivateRoute><Admin2></Admin2></PrivateRoute>,
      },

      {
        path: "/cat/:id",
        element: <PrivateRoute><CatProducts></CatProducts></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/orders/:id",
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/orders/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NoRoute></NoRoute>,
  },
]);
