import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import '../styles/Footer.css'
function Footer(){


    return(
        <footer>
            <span>If You want more visit my socials!</span>

            <div className="icons">
                <FaGithub className="icon"/>
                <FaFacebook className="icon"/>
                <FaLinkedin className="icon"/>

            </div>
        </footer>
    );
}

export default Footer