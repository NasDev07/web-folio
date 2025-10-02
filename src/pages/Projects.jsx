import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 text-center">{t.projects.title}</h1>
                    <p className="text-xl text-gray-300 mb-12 text-center">{t.projects.subtitle}</p>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {t.projects.posts.map((project) => (
                            <Link 
                                key={project.id} 
                                to={`/projects/${project.id}`} 
                                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <span className="text-green-400">{t.projects.liveDemo}</span>
                                        <span className="text-gray-300">{t.projects.detail}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;