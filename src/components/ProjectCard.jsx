import { useState } from "react"

function ProjectCard({project}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="project-card">
            
        </div>
    );
}

export default ProjectCard