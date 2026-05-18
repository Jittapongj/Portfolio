import { useParams, Navigate } from 'react-router-dom';
import Post from '../components/ui/Post';
import { projectData } from '../data/projects';

const ProjectPost = () => {
  const { projectSlug } = useParams();
  const project = projectData.find((p) => p.slug === projectSlug);

  if (!project) {
    // หากไม่พบโปรเจกต์ ให้ redirect กลับไปหน้ารวมโปรเจกต์
    return <Navigate to="/projects" replace />;
  }

  return <Post project={project} />;
};

export default ProjectPost;