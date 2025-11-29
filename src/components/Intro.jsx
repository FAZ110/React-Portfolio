import { useEffect, useState } from "react";
import '../styles/Intro.css'

function Intro(){

    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        { text: 'Student', color: '#4CAF50' },
        { text: 'Software Engineer', color: '#2196F3' },
        { text: 'Web Developer', color: '#FF9800' },
        { text: 'Problem Solver', color: '#9C27B0' },
        { text: 'Creative Thinker', color: '#E91E63' }
    ];

    useEffect(() => {
        const current = roles[currentRole];
        const fullText = current.text;

        let timer;

        if (isDeleting){
            timer = setTimeout(() => {
                setDisplayText(fullText.substring(0, displayText.length-1))
            }, 50);
        }else{
            timer = setTimeout(() => {
                setDisplayText(fullText.substring(0, displayText.length + 1))
            }, 100);
        }

        if (!isDeleting && displayText == fullText){
            timer = setTimeout(() => setIsDeleting(true), 2000);
        }else if (isDeleting && displayText === ''){
            setIsDeleting(false);
            setCurrentRole((prev) => (prev+1)%roles.length);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole]);

    const currentRoleData = roles[currentRole];


    return(
        <div className="intro-container">
            <div className="message">
                <p>Hello I am a <span className="role-text"
                style = {{color: currentRoleData.color}}>{displayText}</span><span className="cursor">|</span></p>
            </div>

        </div>
    );
}
export default Intro