import Layout from "./components/Layout";
import { useTypedSelector,useTypedDispatch } from "./hooks/TypedReduxHooks"
import { login,logout } from "./store/slices/authSlice";

function App() {
  const loginState = useTypedSelector((state) => state.auth.isLoggedIn);
  const dispatch = useTypedDispatch();
  const handleClick = () => {
    if(loginState){
      dispatch(logout());
    }else{
      dispatch(login());
    }
  }
  return (
    <Layout>
      <center>
        <h3>layout</h3>
      </center>
    </Layout>
  )
}

export default App
