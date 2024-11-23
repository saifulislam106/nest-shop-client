import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Pages/loading";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to="/" state={{ form: location }} replace/>
};

export default PrivateRoute;