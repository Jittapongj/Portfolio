// src/components/ui/card.jsx
import React from 'react';

// เราจะรับ Props: title (ชื่อ), description (รายละเอียดยาวๆ), image (รูป), and tags (เทคโนโลยีที่ใช้ - ถ้ามี)
const ProjectCard = ({ title, description, image, gitUrl }) => {
    return (
        <div className="card card-project flex flex-col h-full">
            <div className="card-image relative group overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute"></div>
            </div>
            <div className="card-body p-5 flex flex-col">
                <h3 className="title text-xl font-bold" title={title}>{title}</h3>
                <p className="des text-sm mb-4 line-clamp-3">{description}</p>
                <div className="giturl flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    {gitUrl && (
                        <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2" > Code </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;