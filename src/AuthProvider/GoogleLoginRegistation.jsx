import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginRegistation = () => {

    const {GoogleLogin} =useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        GoogleLogin().then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          <FcGoogle /> Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLoginRegistation;
