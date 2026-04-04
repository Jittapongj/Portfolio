import '../../styles/ui/card.scss';
import PlaceholderImage from '../../assets/images/placeholder.png';
import GithubImage from '../../assets/images/github.png';

export const ProjectCard = ({ title, description, image, gitUrl, onReadMore }) => {
    return (
        <div className="card card-project flex flex-col h-full">
            <div className="card-image relative group overflow-hidden">
                <img
                    src={image} alt={title} className="w-full h-full object-cover"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = PlaceholderImage; 
                    }}
                />
                <div className="absolute"></div>
            </div>
            <div className="card-body p-5 flex flex-col grow">
                <h3 className="title text-xl font-bold" title={title}>{title}</h3>
                <p className="des text-sm mb-4 line-clamp-3">{description}</p>
                <div className="readmore flex justify-end items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    {gitUrl && (
                        <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="" >
                            <img src={GithubImage} alt="GitHub" className='w-6 h-6 bg-white'/>
                        </a>
                    )}
                    <div 
                        onClick={onReadMore} 
                        className="btn-primary text-sm px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-black hover:text-white transition-colors"
                    > 
                        Read More 
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ContactCard = ({ label, value, icon, link }) => {
    const CardContent = (
        <div className="card card-contact flex items-center gap-3">
            <div className="card-icon flex items-center justify-center shrink-0">
                <img src={icon} alt={label} className="object-contain" />
            </div>
            <div className="card-info flex flex-col min-w-0">
                <span className="card-label uppercase">
                    {label}
                </span>
                <span className="card-value">
                    {value}
                </span>
            </div>
        </div>
    );

    return link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            {CardContent}
        </a>
    ) : (
        CardContent
    );
};