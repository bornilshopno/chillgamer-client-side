import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


//add logo about developer
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <aside>
                    {/* log0 */}
                    <p>
                        Chill Gamer
                        <br />
                        A Game Review Application
                    </p>
                </aside>
                <nav>
                    <Link to={"/developer-details"}>About Developer</Link>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link><BsTwitterX className="text-xl"/></Link>
                        <Link><IoLogoYoutube className="text-xl"/></Link>
                        <Link><FaFacebookF className="text-xl"/></Link>
                    </div>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;