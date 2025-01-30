import { TfiMenuAlt } from "react-icons/tfi";
import { Link, NavLink, useLocation } from "react-router-dom";
import picture from "../assets/profile.jpg"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../Comp_Core/AuthProvider";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { IoMoon, IoSunny } from "react-icons/io5";
import { IoGameControllerSharp } from "react-icons/io5"




const Navbar = () => {
  const { user, userSignOut, dark, setDark } = useContext(AuthContext);
  
  const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/reviews">All Reviews</NavLink>
    { user && <>
      <NavLink to="/add-review">Add Review</NavLink>
    <NavLink to="/my-reviews">My Review</NavLink>
    <NavLink to="/my-watchlist">WatchList</NavLink>
     </>}

  </>



  const { pathname } = useLocation();
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (<>
    <div className="bg-amber-400 dark:bg-gray-800 fixed z-50 top-0 w-full text-gray-800 dark:text-white px-2 md:px-5 lg:px-10 h-26 py-auto">
      <ToastContainer autoClose={2000} position="top-center" />
      <div className="navbar p-1 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <TfiMenuAlt className="text-xl mr-3" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-amber-400 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 ">
              {links}
            </ul>
          </div>
          <Link to="/"> <div className="flex gap-2 items-center"><IoGameControllerSharp className="text-3xl" /><span className="text-2xl font-bold">ChillGamer</span></div></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ?
            <div className="flex gap-1">
                {/* border-1 bg-white border-amber-600 p-1 */}
              {user?.photoURL ?
                <div className="border-2 p-[2px] bg-amber-500 dark:border-gray-400 dark:bg-gray-600 border-amber-600 rounded-full">
                  <a id="my-anchor-element" >
                  <img
                    src={user.photoURL} className="rounded-full h-12 w-12 "
                    alt="user" />
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user?.displayName}
                  />
                </a>
                </div>
         :
                <img
                  src={picture} className="rounded-full h-12 w-12 "
                  alt="Album" />}
              <Link className="btn btn-active btn-neutral ml-2 dark:border-2 dark:border-gray-400" to="/" onClick={userSignOut}>Log Out</Link>
            </div> :
            <div>
              <div className={`${(pathname === '/register' || pathname === '/login') ? 'hidden' : 'p-2 flex flex-row'} `}>
                <Link className="btn btn-active btn-neutral ml-2 hidden md:flex dark:border-2 dark:border-gray-400" to="/register">Registar</Link>
                <Link className="btn btn-active btn-neutral ml-2 dark:border-2 dark:border-gray-400" to="/login">LogIn</Link>
              </div>
              <div className={`${(pathname === '/register') ? 'p-2 flex flex-row' : 'hidden'} `}>
                <Link className="btn btn-active btn-neutral ml-2 dark:border-2 dark:border-gray-400" to="/login">LogIn</Link>
                <Link className="btn btn-active btn-neutral ml-2 hidden md:flex dark:border-2 dark:border-gray-400" to="/">Back to Home</Link>
              </div>
              <div className={`${(pathname === '/login') ? 'p-2 flex flex-row' : 'hidden'} `}>
                <Link className="btn btn-active btn-neutral ml-2 dark:border-2 dark:border-gray-400" to="/register">Registar</Link>
                <Link className="btn btn-active btn-neutral ml-2 hidden md:flex dark:border-2 dark:border-gray-400" to="/">Back to Home</Link>
              </div>
            </div>
          }
          <div className="mode-buttons ml-2">
            <button onClick={() => darkModeHandler()}>
              {

                dark && <IoSunny className="text-5xl text-white" />
              }
              {
                !dark && <IoMoon className="text-5xl" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="h-16"></div>
    </>
  );
};

export default Navbar;