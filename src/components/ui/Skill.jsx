import { skills } from '../../data/skills';
import '../../styles/ui/skills.scss';

const Skills = () => {
    return (
        <section id="skill">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.id} className="skill-item flex flex-col items-center">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <span className="skill-name mt-2 font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;