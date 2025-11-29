import ProjectCard from "./ProjectCard"
import '../styles/Projects.css'

function Projects({projectsData}){
    return(
        <section id="projects">
            <h2>My Portfolio work</h2>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    );
}
export default Projects