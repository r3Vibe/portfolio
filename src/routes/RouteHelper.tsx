import { Outlet,Navigate } from "react-router-dom"
import { useTypedSelector } from "../hooks/TypedReduxHooks"
import { useLocation } from "react-router-dom"

interface helper{
    giveAccess?:string
}

const RouteHelper = ({giveAccess}:helper) => {
    const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);
    const role = useTypedSelector((state) => state.auth.userData.role);
    const location = useLocation();

    switch (giveAccess) {
        case "adminOnly":{
            return (
                isLoggedIn && role === 'admin' ? <Outlet /> : <Navigate to={"/auth/login"} state={location.pathname}/>
            )
        }
        case "authOnly":{
            return (
                isLoggedIn ? <Outlet /> : <Navigate to={"/auth/login"} state={location.pathname}/>
            )
        }
        case "redirectIfAuth":{
            if(isLoggedIn){
                return (
                    role === 'admin' ? <Navigate to={"/admin/dashboard"} state={location.pathname}/> : <Navigate to={"/"} state={location.pathname}/>
                )
            }else{
                return (
                    <Outlet/>
                )
            }
        }
        default:{
            return (
                <Outlet/>
            )
        }
    }

}

export default RouteHelper
