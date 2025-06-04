import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { user } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-semibold" : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-semibold" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "text-green-500 font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Nest<span className="text-green-500">S</span>hop
            </h2>
          </Link>
        </div>

        {/* Center - Nav Links (Desktop only) */}
        <ul className="menu menu-horizontal hidden lg:flex gap-6 text-white font-medium">
          {navLinks}
        </ul>

        {/* Right - Auth Buttons or User Dropdown */}
        <div className="flex items-center gap-3">
          {user ? (
            <UserDropdown />
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn btn-sm rounded-full bg-green-700 hover:bg-green-800 text-white px-5">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm rounded-full bg-green-900 hover:bg-green-950 text-white px-5">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
