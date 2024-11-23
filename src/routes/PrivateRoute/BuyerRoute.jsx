import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import Loading from "../../Pages/Loading";


const BuyerRoute = ({children}) => {
    const { user, loading } = useAuth ();
    

    const userData = useUserData()
    console.log(user , userData);
    const location = useLocation()
    
    if (loading || !userData.role) {
        return <Loading></Loading>
    }
    if (user && userData.role === "Buyer") {
        return children
    }
    return <Navigate to="/login" state={{ form: location }} replace/>
};

export default BuyerRoute;