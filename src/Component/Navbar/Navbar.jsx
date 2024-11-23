import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contact</NavLink>
            </li>
          </ul>
        </div>
        <h2 className="font-bold text-3xl">
          Nest<span className="text-green-500">S</span>hop
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact</NavLink>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <UserDropdown></UserDropdown>
        </div>
      ) : (
        <div className="navbar-end">
          <div className="flex gap-2">
            <Link to="/login">
              <button className="btn bg-green-900 rounded-full text-white">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn bg-green-950 rounded-full text-white">Register</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
