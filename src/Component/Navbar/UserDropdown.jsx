
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";


const UserDropdown = () => {
    const { user, LogoutUser } = useAuth();
    const {userData} = useUserData()
    return (
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-200">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={`${user?.photoURL || /images/user.png}`} />
              </div>
            </div>
            <div className="badge ">
                {userData?.wishlist?.length}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow"
          >
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={LogoutUser} className="btn bg-green-500 btn-sm">
                Logout
              </button>
            </li>
          </ul>
        </div>
      );
};

export default UserDropdown;