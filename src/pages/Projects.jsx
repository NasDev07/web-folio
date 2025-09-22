import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t, currentLanguage } = useLanguage(); // currentLanguage not needed here, but if for future

    const projects = [
        {
            title: t.projects.eCommerce.title,
            description: t.projects.eCommerce.description,
            tech: ['React', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
        },
        {
            title: t.projects.taskManagement.title,
            description: t.projects.taskManagement.description,
            tech: ['Vue.js', 'Firebase', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop'
        },
        {
            title: t.projects.portfolio.title,
            description: t.projects.portfolio.description,
            tech: ['React', 'CSS3', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-8">{t.projects.title}</h1>
                    <p className="text-xl text-gray-300 mb-12">{t.projects.subtitle}</p>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <button className="text-green-400 hover:text-green-300 transition-colors">
                                            {t.projects.liveDemo}
                                        </button>
                                        <button className="text-gray-300 hover:text-white transition-colors">
                                            {t.projects.viewCode}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;