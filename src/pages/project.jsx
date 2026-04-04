// src/pages/project.jsx
import { useState } from 'react';
import PlaceholderImage from '../assets/images/placeholder.png';
import { ProjectCard } from '../components/ui/card';
import Post from '../components/ui/post';
import { projectData } from '../data/projects';

const Projects = () => {
  // สร้าง State สำหรับเก็บโปรเจกต์ที่ถูกคลิก
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-8 min-h-screen">
      {selectedProject ? (
        <Post
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <div className="container mx-auto px-4 animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4"> My Projects </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image || PlaceholderImage}
                gitUrl={project.gitUrl}
                onReadMore={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;