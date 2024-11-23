import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Navbar />
            </div>
            <div className="container mx-auto min-h-screen h-full">
            <Outlet />
            </div>
            <div>
            <Footer />
            </div>
        </div>
    );
};

export default Root;