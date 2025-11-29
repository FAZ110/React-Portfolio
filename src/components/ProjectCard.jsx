import { useState } from "react"
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import '../styles/ProjectCard.css'

function ProjectCard({project}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`project-card ${isOpen ? 'open' : ''}`}>
            <div className="project-header" onClick={toggleState}>
                <div>
                  <h3>{project.title}</h3>
                  <p className="short-desc">{project.shortDesc}</p>
                </div>

                <span className="toggle-icon" aria-hidden>
                    {isOpen ? <FaAngleUp/> : <FaAngleDown/>}
                </span>
            </div>

            { /* accordion content: visible when .open is present */ }
            <div className="project-details" aria-expanded={isOpen}>
                <p>{project.longDesc}</p>

                <div className="tech-list">
                    <strong>Technologies:</strong> {project.tech.join(', ')}
                </div>
                <div className="links">
                    {/* place links/buttons here */}
                </div>
            </div>

        </div>
    );
}

export default ProjectCard