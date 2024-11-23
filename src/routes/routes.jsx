import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Overview from "../Component/Dashboard/Overview";
import BuyerRoute from "./PrivateRoute/BuyerRoute";
import MyWishlist from "../Component/Dashboard/Buyer/MyWishlist";
import SellerRoute from "./PrivateRoute/SellerRoute";
import AddProducts from "../Component/Dashboard/Seller/AddProducts";
import MyProduct from "../Component/Dashboard/Seller/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>     
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      // buyer routes
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <MyWishlist />
          </BuyerRoute>  
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProduct />
          </SellerRoute>  
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>  
        ),
      },
    ],
  },
]);

export default router;
