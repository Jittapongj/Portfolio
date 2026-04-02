import ProjectCard from '../components/ui/card';
import { projectData } from '../data/projects'; 

const Projects = () => {
  return (
    <section className="card card-project py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4"> My Projects </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description}
              image={project.image}
              gitUrl={project.gitUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;