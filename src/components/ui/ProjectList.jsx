import PlaceholderImage from '../../assets/images/projects/placeholder.png';
import { ProjectCard } from '../ui/Card';
import { projectData } from '../../data/projects';

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image || PlaceholderImage}
          readMoreUrl={`/projects/${project.slug}`}
        />
      ))}
    </div>
  );
};

export default ProjectList;