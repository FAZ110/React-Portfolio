import '../styles/Contact.css'
import { useState } from "react";

function Contact(){
    const [email, setEmail] = useState('')


    const emailHandle = (email) => {

    }

    return(
        <div className="contact-container">
            <input type="email" placeholder="e-mail" required/>
            <input type="text" placeholder="Title" required/>
            <textarea name="message" id="message" cols={1} rows={5} placeholder='Type your message' required></textarea>
            <button className="send-btn">Send</button>
        </div>
    );
}

export default Contact