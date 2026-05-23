import { useNavigate } from 'react-router-dom';
import PlaceholderImage from '../../assets/images/projects/placeholder.png';
import '../../styles/ui/post.scss';
import { ProjectCard } from './Card';
import { projectData } from '../../data/projects';

const Post = ({ project }) => {
    const navigate = useNavigate();
    if (!project) return null;

    const handleBack = () => {
        navigate('/projects');
    };

    const latestProjects = projectData.filter((p) => p.id !== project.id).slice(0, 3);

    return (
        <div className="post animate-fade-in">
            <div className="post-header py-6 px-4 max-w-7xl mx-auto">
                <div className="breadcrumb flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <span onClick={() => navigate('/')} className="cursor-pointer">
                        Home
                    </span>
                    <span className="text-gray-300">/</span>
                    <span onClick={() => navigate('/projects')} className="cursor-pointer">
                        Projects
                    </span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-500">
                        {project.slug}
                    </span>
                </div>

                <h1 className="title mb-3">{project.title}</h1>
                <p className="description mb-3">
                    {project.description}
                </p>
                <p className="date">Published on {project.date}</p>
            </div>

            <div className="post-content px-4 py-8 max-w-7xl mx-auto">
                <div className="wrapper">
                    <img src={project.image || PlaceholderImage} alt={project.title} className="post-image w-full h-auto object-cover mb-6" />
                    <div className="post-body">
                        {project.overview && (
                            <div className="overview mb-5">
                                <h2 className="mb-2">Overview</h2>
                                <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                            </div>
                        )}

                        {project.features && project.features.length > 0 && (
                            <div className="features mb-5">
                                <h2 className="mb-2">Features</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.structure && (
                            <div className="project-structure mb-5">
                                <h2 className="mb-2">Project Structure</h2>
                                <div className="structure bg-[#1e1e1e] text-[#d4d4d4] p-5 rounded-lg overflow-x-auto shadow-inner">
                                    <pre className="leading-relaxed">
                                        <code>{project.structure}</code>
                                    </pre>
                                </div>
                            </div>
                        )}

                        {project.tools && project.tools.length > 0 && (
                            <div className="tech-stack mb-5">
                                <h2 className="mb-2">Tech Stack</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {project.tools.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.gitUrl && (
                            <div className="git-url mb-5">
                                <a
                                    href={project.gitUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='latest-projects px-4 py-8 max-w-7xl mx-auto'>
                <div className="flex justify-between items-center mb-4">
                    <h2>Latest Projects</h2>
                    <button onClick={() => navigate('/projects')} className="text-blue-600 font-medium gap-2 cursor-pointer">
                        View All Projects
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestProjects.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => {
                                window.scrollTo({top: 0,behavior: 'smooth'});
                                navigate(`/projects/${p.slug}`);
                            }}
                            className="card card-project cursor-pointer group flex flex-col"
                        >
                            <div className="card-image">
                                <img
                                    src={p.image || PlaceholderImage}
                                    alt={p.title}
                                    className="w-full h-full p-0 object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title mb-2">{p.title}</h4>
                                <p className="card-description line-clamp-3">
                                    {p.shortDescription || p.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post;