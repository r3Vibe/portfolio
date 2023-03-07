import { useTypedDispatch,useTypedSelector } from "../../hooks/TypedReduxHooks"
import { login } from "../../store/slices/authSlice"
import { useNavigate,useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useTypedDispatch();
  const role = useTypedSelector((state) => state.auth.userData.role);
  return (
    <div>
      <button className="btn btn-success" onClick={()=>{
        dispatch(login());
        if(role === 'admin'){
          navigate("/admin/dashboard");
        }else{
          navigate(location.state && location.state !== "" ? location.state : "/" );
        }
        }}>Login</button>
    </div>
  )
}

export default Login
