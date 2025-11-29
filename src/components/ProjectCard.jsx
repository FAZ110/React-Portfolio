import { useState } from "react"
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import '../styles/ProjectCard.css'

function ProjectCard({project}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="project-card">
            <div className="project-header" onClick={toggleState}>
                <h3>{project.title}</h3>
                <p className="short-desc">{project.shortDesc}</p>

                <span className="toggle-icon">
                    {isOpen ? <FaAngleUp/> : <FaAngleDown/>}
                </span>
            </div>

            {isOpen && (
                <div className="project-details">
                    <p>{project.longDesc}</p>

                    <div className="tech-list">
                        **Technologies:** {project.tech.join(', ')}
                    </div>
                    <div className="links">

                    </div>
                </div>

            )}

        </div>
    );
}

export default ProjectCard