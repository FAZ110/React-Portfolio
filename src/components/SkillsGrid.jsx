import Skill from "./skill";
import '../styles/SkillsGrid.css'
function SkillsGrid(props) {

    const skills = props.skills;
    return(
        <div className="skills-grid">
            <header className="skills-opening"><span>Here are some of my skills: </span></header>

            <div className="grid">
                {skills.map((skill, idx) => (
                    <Skill skill={skill} key={idx}/>
                ))}
            </div>

        </div>
    );
}
export default SkillsGrid