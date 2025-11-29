import '../styles/Skill.css'
function Skill(props) {
    const progress = Math.max(0, Math.min(100, Number(props.skill.progress) || 0))

    return(
        <div className="skill-container">
            <header><span>{props.skill.name}</span></header>

            <div className="progress-wrapper">
                <div 
                    className="progress-bar"
                    role='progressbar'
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={progress}>
                    <div className="progress-fill"
                    style={{width: `${progress}%`}}></div>

                </div>
                <div className="progress-label">{progress}%</div>
            </div>

            <ul className="technologies">
                {props.skill.tech.map((elem, idx) => (
                    
                    <li key={idx} className="tech-elem">
                        <span>{elem}</span>
                    </li>
                ))}
                
            </ul>

        </div>
    );
}
export default Skill