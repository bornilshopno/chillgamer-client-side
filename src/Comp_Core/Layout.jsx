import { Outlet } from "react-router-dom";
import Navbar from "../Comp_Utilities/Navbar";
import Footer from "../Comp_Utilities/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;