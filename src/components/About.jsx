import '../styles/About.css'

function About(){

    return(
        <div className="about-container">

            <div className="photo">
                <img src="photo.jpg" alt="My profile picture" style={{width: '200px'}}/>
            </div>
            <div className="more-info">
                <ul className="list">
                    <li className="elem">I am currently on my 3rd year as a student of CS at AGH.</li>
                    <li className="elem">I am 21 years old, full of energy to develop my skills</li>
                    <li className="elem">Besides Web Dev I am interested in OOP and problem solving</li>
                </ul>
            </div>
        </div>
    );
}

export default About