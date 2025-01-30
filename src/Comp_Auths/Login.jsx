import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import regSignIn from "../assets/LogInAnimation.json"
import Lottie from "lottie-react";


const Login = () => {
  const { user, setUser, userLogin, googleSignIn, setLoading } = useContext(AuthContext);
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const emailRef = useRef();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then(result => {
        const currentUser = result.user;
        setUser(currentUser);
        setLoading(false);
        navigate(location?.state ? location.state : "/")


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage)
      });
  }


  const googleHandler = () => {
    googleSignIn()
      .then((result) => {

        // The signed-in user info.
        const newUser = result.user;
        setUser(newUser);
        setLoading(false);
        navigate("/")

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
    //
  }


  const location = useLocation();




  return (


    <div className="bg-gradient-to-br from-blue-600 to-sky-500 py-5 ">
      <Helmet>
        <title>ChillGamer || LogIn</title>
      </Helmet>


      

      <div className="flex justify-center gap-5 flex-col lg:flex-row w-11/12 lg:w-10/12 mx-auto">

        <div className="flex-1 my-auto">
        <Lottie animationData={regSignIn} className="w-80 mx-auto"></Lottie>
        </div>

        <div className="card bg-base-100 w-10/12 lg:w-7/12 mx-auto shrink-0 shadow-2xl flex-1">
        <h2 className="text-center text-3xl font-bold  my-auto py-4 md:pt-10">
        {user ? `Logged in with ${user.email}` : "Welcome Back!"}
      </h2>
          <form onSubmit={handleLogIn} className="card-body pb-0">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* <input name="password" type="password" placeholder="password"  className="input input-bordered" required /> */}
              <input name="password" type={visible ? "text" : "password"} placeholder="password" className="input input-bordered " required />
              <button className="absolute right-4 top-12" onClick={() => setVisible(!visible)}>
                {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
              </button>
              <label className="label">

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
          <div className="divider divider-neutral">or</div>
          <button className="btn btn-primary mx-8 mb-8" type="submit" onClick={googleHandler}>
            <div className="flex gap-2 items-center px-3 py-1 justify-center">
              <FcGoogle />
              <h2>Login with Google</h2>

            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;