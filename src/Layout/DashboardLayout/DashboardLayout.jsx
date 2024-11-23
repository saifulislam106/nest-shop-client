import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/Dashboard/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className="col-span-10 py-16">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;