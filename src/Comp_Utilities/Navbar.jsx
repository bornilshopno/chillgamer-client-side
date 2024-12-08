import { TfiMenuAlt } from "react-icons/tfi";
import { Link, NavLink, useLocation } from "react-router-dom";
import picture from "../assets/LOGO-CG.jpg"
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
    <NavLink to="/add-review">Add Review</NavLink>
    <NavLink to="/my-reviews">My Review</NavLink>
    <NavLink to="/my-watchlist">WatchList</NavLink>
  </>



  const { pathname } = useLocation();
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (<>
    <div className="bg-amber-400 dark:bg-gray-800 fixed z-50 top-0 w-full text-gray-800 dark:text-white px-2 md:px-5 lg:px-10 h-26 py-auto">
      <ToastContainer autoClose={2000} position="top-center" />
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <TfiMenuAlt />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to="/"> <div className="flex gap-3 items-center"><IoGameControllerSharp className="text-2xl" /><span className="text-2xl font-bold">ChillGamer</span></div></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ?
            <div className="flex gap-1">
              {user?.photoURL ?
                <a id="my-anchor-element" >
                  <img
                    src={user.photoURL} className="rounded-full h-12 w-12 border-2 bg-gray-600 border-gray-600"
                    alt="user" />
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user?.displayName}
                  />
                </a> :
                <img
                  src={picture} className="rounded-full h-12 w-12"
                  alt="Album" />}
              <Link className="btn btn-active btn-neutral ml-2" to="/" onClick={userSignOut}>Log Out</Link>
            </div> :
            <div>
              <div className={`${(pathname === '/register' || pathname === '/login') ? 'hidden' : 'p-2'} `}>
                <Link className="btn btn-active btn-neutral ml-2" to="/register">Registar</Link>
                <Link className="btn btn-active btn-neutral ml-2" to="/login">LogIn</Link>
              </div>
              <div className={`${(pathname === '/register') ? 'p-2' : 'hidden'} `}>
                <Link className="btn btn-active btn-neutral ml-2" to="/login">LogIn</Link>
                <Link className="btn btn-active btn-neutral ml-2" to="/">Back to Home</Link>
              </div>
              <div className={`${(pathname === '/login') ? 'p-2' : 'hidden'} `}>
                <Link className="btn btn-active btn-neutral ml-2" to="/register">Registar</Link>
                <Link className="btn btn-active btn-neutral ml-2" to="/">Back to Home</Link>
              </div>
            </div>
          }
          <div className="mode-buttons">
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