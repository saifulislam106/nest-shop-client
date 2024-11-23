import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import Loading from "../../Pages/loading";


const SellerRoute = ({children}) => {
    const { user, loading } = useAuth();

    const userData = useUserData()
    const location = useLocation()
    
    if (loading || !userData.role) {
        return <Loading></Loading>
    }
    if (user && userData.role === "Seller") {
        return children
    }
    return <Navigate to="/login" state={{ form: location }} replace/>
};

export default SellerRoute;