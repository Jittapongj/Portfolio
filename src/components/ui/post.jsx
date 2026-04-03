import PlaceholderImage from '../../assets/images/placeholder.png';

const Post = ({ project, onBack }) => {
    if (!project) return null;

    return (
        <div className="container mx-auto px-4 max-w-4xl py-4 animate-fade-in">
            <button
                onClick={onBack}
                className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
            </button>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <img
                    src={project.image || PlaceholderImage}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                />

                <div className="p-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-6">{project.title}</h1>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-100">Overview</h2>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {project.fullDescription || project.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-100">Tools & Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tools?.map((tool, index) => (
                                <span key={index} className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-100">Project Structure</h2>

                        {project.structure ? (
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-center">
                                <img
                                    src={project.structure}
                                    alt={`Structure of ${project.title}`}
                                    className="max-w-full h-auto rounded-lg shadow-sm"
                                    onError={(e) => e.target.style.display = 'none'} // ซ่อนรูปถ้ารูปเสีย
                                />
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm bg-gray-50 p-4 rounded-lg">
                                No structure image provided.
                            </p>
                        )}
                    </div>

                    {project.gitUrl && (
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <a
                                href={project.gitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
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