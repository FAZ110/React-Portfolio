import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
function Footer(){


    return(
        <footer>
            <span>If You want more visit my socials!</span>

            <div className="icons">
                <FaGithub />
                <FaFacebook/>
                <FaLinkedin/>

            </div>
        </footer>
    );
}

export default Footer