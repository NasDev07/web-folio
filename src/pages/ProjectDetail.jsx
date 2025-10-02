import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
    const { id } = useParams();
    const { t } = useLanguage();
    const [activeImage, setActiveImage] = useState(0);

    const project = t.projects.posts.find(p => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">&larr; Back to Projects</Link>
                    <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">{project.title}</h1>

                    <div className="mb-8">
                        <img
                            src={project.images[activeImage]}
                            alt={`${project.title} screenshot ${activeImage + 1}`}
                            className="w-full h-auto object-cover rounded-lg shadow-xl mb-4"
                        />
                        <div className="flex gap-4 justify-center">
                            {project.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-24 h-16 object-cover rounded cursor-pointer ${activeImage === index ? 'border-2 border-cyan-400' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.fullDescription}</p>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors"
                        >
                            {t.projects.liveDemo}
                        </a>
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
                        >
                            {t.projects.viewCode}
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;