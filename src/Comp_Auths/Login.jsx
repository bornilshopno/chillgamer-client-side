import { useContext, useRef } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Login = () => {
    const{setUser,userLogin,googleSignIn}= useContext(AuthContext)
    const navigate=useNavigate()
    const emailRef=useRef();
    const handleLogIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
    const password=e.target.password.value;
 
    userLogin(email,password)
    .then (result=>{
    
        const currentUser=result.user;
        setUser(currentUser);
        navigate(location?.state? location.state:"/")
   

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode , errorMessage)
    });
    }


    const googleHandler=()=>{
        googleSignIn()
        .then((result) => {

            // The signed-in user info.
            const newUser = result.user;
            setUser(newUser);
            navigate("/")
    
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode, errorMessage);
          });
        //
    }

    return (

        
        <div className="bg-gradient-to-br from-blue-600 to-sky-500 ">
        <Helmet>
          <title>chillGamer || LogIn</title>
        </Helmet>
          <div className="flex justify-between w-10/12 lg:w-7/12 mx-auto py-5">
        <div className="flex flex-col items-center justify-center w-2/3">
        <h2 className="text-center text-3xl font-bold w-44 mx-auto my-auto">Lets Log In</h2>
           
        </div>
   
         
            <button className="active:bg-sky-700  rounded-lg  bg-blue-600 my-auto border-2 w-3/12" onClick={googleHandler}>
            <div className="flex gap-2 items-center justify-center px-3 py-1">
              <h2>Login with</h2>
              <FcGoogle />
            </div>
            </button>
        
          </div>
             <div className="card bg-base-100 w-10/12 lg:w-7/12 mx-auto shrink-0 shadow-2xl">
         

      <form onSubmit={handleLogIn} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password"  className="input input-bordered" required />
          <label className="label">
          {/* <Link to={"/recover_password"} state={{recoveryEmail}}  onClick={emailHandler} className="label-text-alt link link-hover" >Forgot password?</Link> */}
          <h2 className=" flex gap-2">
              <span className="text-red-900 font-semibold my-auto text-sm">Not Registered?</span> 
            <Link to="/register" className=" btn-link h-6 text-sm">SignUp</Link>
            </h2>

        </label>
        
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
          
        
      </form>
    </div>
      </div>
    );
};

export default Login;