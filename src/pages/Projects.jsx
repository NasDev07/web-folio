import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const Projects = () => {
    const { t } = useLanguage();

    // Function to truncate description
    const truncateDescription = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

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
                                className="group bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-green-500/10 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                aria-label={`View details of ${project.title} project`}
                            >
                                <div className="h-48 overflow-hidden">
                                    <LazyImage
                                        src={project.thumbnail}
                                        alt={`${project.title} project screenshot`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Truncated description with read more indicator */}
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {truncateDescription(project.description)}
                                        {project.description.length > 100 && (
                                            <span className="text-green-400 ml-1 text-sm font-medium">
                                                Read more
                                            </span>
                                        )}
                                    </p>
                                    
                                    {/* Technology stack - limit to first 3 */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-600/50 text-gray-400 text-sm rounded-full">
                                                +{project.tech.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Action indicators */}
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                                        <span className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                                            {t.projects.liveDemo}
                                        </span>
                                        <span className="text-gray-400 text-sm flex items-center group-hover:text-white transition-colors duration-300">
                                            {t.projects.detail}
                                            <svg 
                                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
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