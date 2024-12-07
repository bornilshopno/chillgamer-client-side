import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Comp_Core/AuthProvider";
import Swal from 'sweetalert2'


const Register = () => {
    const{createUser,setUser,googleSignIn}=useContext(AuthContext)

    const [visible, setVisible] = useState(false)
    const[passErr,setPassErr]=useState("")
    const navigate=useNavigate()



    const handleRegister = (e) => {
        e.preventDefault();
    let userInput = new FormData(e.target);
    const uName = userInput.get("name");
    const email = userInput.get("email");
    const photo = userInput.get("photo");
    const password = userInput.get("password");
    console.log({uName, email,photo,password})

    setPassErr("")
    let regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    if (!regExp.test(password)) {
      setPassErr("Password to be atleast 6 characters & atleast one Uppercase & one Lowercase letter");
      toast.error("Please check requirement above the REGISTER button")
      return;
    }

    createUser(email,password,uName,photo)
    .then((userCredential) => {
        // Signed up 
        const newUser = userCredential.user;
        setUser(newUser);
        Swal.fire({
            title: 'Success!',
            text: 'Thanks for registering in chillGamer',
            icon: 'success',
            confirmButtonText: 'Close'
          })
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setPassErr(errorCode,errorMessage)
        toast.error(`Resgistration Failed due to ${passErr}`)
      });
        //
    }

    const googleHandler = () => {
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
        <>
            <Helmet>
                <title>Chill Gamer || Registration</title>
            </Helmet>
            <div className="bg-gradient-to-br from-sky-100 to-sky-500 ">


                <h2 className="text-center text-4xl font-bold text-gray-600 pb-5">Register with chillGamer</h2>
                <div className="card bg-base-100 w-10/12 lg:w-7/12 mx-auto shrink-0 shadow-2xl">

                    

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input name="photo" type="url" placeholder="Photo-URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={visible ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <button className="absolute right-4 top-12" onClick={() => setVisible(!visible)}>
                                {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
                            </button>
                        </div>


                        <h2 className="label flex justify-end"><span>Registered already?</span>
                            <Link to="/login" className="btn btn-active btn-link">LogIn</Link>
                        </h2>
                        <p className="text-red-500 font-bold text-center">{passErr}</p>
                        <div className="form-control ">
                            <button className="btn btn-primary">Register</button>
                        </div>


                    </form>

                    <button className="btn btn-primary mx-8 mb-8" type="submit" onClick={googleHandler}>
                        <div className="flex gap-2 items-center px-3 py-1 justify-center">
                        <FcGoogle />
                            <h2>Login with Google</h2>
                            
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Register;