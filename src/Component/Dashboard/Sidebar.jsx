import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";

const sellerRoutes = [
  {
    id: 1,
    title: "My Products",
    routes: "/dashboard/my-products",
  },
  {
    id: 2,
    title: "Add Products",
    routes: "/dashboard/add-products",
  },
];

const buyerRoutes = [
  {
    id: 1,
    title: "My Wishlist",
    routes: "/dashboard/wishlist",
  },
];

const Sidebar = () => {
  const { LogoutUser } = useAuth();
  const userData = useUserData();
  const role = userData?.role;
  console.log(role);

  return (
    <div className="bg-gray-200 border-r border-black min-h-screen h-full px-8 py-16">
      <h2 className="font-bold text-2xl mb-4">NestShop</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/dashboard/overview" activeClassName="font-bold">Overview</NavLink>
        </li>
        {role === "Seller" &&
          sellerRoutes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.routes} activeClassName="font-bold">{route.title}</NavLink>
            </li>
          ))}
        {role === "Buyer" &&
          buyerRoutes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.routes} activeClassName="font-bold">{route.title}</NavLink>
            </li>
          ))}
        <li>
          <NavLink to="/" activeClassName="font-bold">Home</NavLink>
        </li>
        <li onClick={LogoutUser}>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
