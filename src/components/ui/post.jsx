import PlaceholderImage from '../../assets/images/placeholder.png';
import '../../styles/ui/post.scss';

const Post = ({ project, onBack }) => {
    if (!project) return null;

    return (
        <div className="post container mx-auto px-4 max-w-4xl py-4 animate-fade-in">
            <button
                onClick={onBack}
                className="btn-back mb-8 flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
            </button>

            <div className="post-wrapper overflow-hidden">
                <img
                    src={project.image || PlaceholderImage}
                    alt={project.title}
                    className="post-image w-full object-cover"
                />
                <div className="post-body p-8">
                    <h1 className="title mb-6">{project.title}</h1>

                    <div className="mb-8">
                        <h2 className="overview mb-3 pb-2">Overview</h2>
                        <p className="description">{project.description}</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-100">Tools & Technologies</h2>
                        <div className="tech-stack flex flex-wrap gap-2">
                            {project.tools?.map((tool, index) => (
                                <span key={index} className="tool">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="project-structure mb-3 pb-2">Project Structure</h2>

                        {project.structure ? (
                            <div className="structure p-4 flex justify-center">
                                <img
                                    src={project.structure}
                                    alt={`Structure of ${project.title}`}
                                    className="max-w-full h-auto"
                                    onError={(e) => e.target.style.display = 'none'} // ซ่อนรูปถ้ารูปเสีย
                                />
                            </div>
                        ) : (
                            <p className="no-structure p-4">
                                No structure image provided.
                            </p>
                        )}
                    </div>

                    {project.gitUrl && (
                        <div className="mt-8">
                            <a
                                href={project.gitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-github inline-flex items-center gap-2 px-6 py-3"
                            >
                                View Source Code
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Post;