import ProjectList from '../components/ui/ProjectList';
import { ProjectCard } from '../components/ui/Card';

const Projects = () => {
  return (
    <section className="py-8 min-h-screen">
      <div className="container mx-auto animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4"> My Projects </h2>
        </div>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;