import { useContext } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const{user}=useContext(AuthContext)
    const location=useLocation()

if(user){
    return <div> {children} </div>
}

else return ( <Navigate to={"/login"} state={location.pathname}></Navigate>

)};

export default PrivateRoute;