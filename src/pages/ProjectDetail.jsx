import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
    const { id } = useParams();
    const { t } = useLanguage();
    const [activeImage, setActiveImage] = useState(0);

    // Same projects data as in Projects.jsx
    const projects = [
        {
            id: 'ecommerce',
            title: t.projects.eCommerce.title,
            fullDescription: t.projects.eCommerce.fullDescription,
            tech: ['React', 'Node.js', 'MongoDB'],
            thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
                'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop'
            ],
            demoUrl: 'https://example.com/ecommerce-demo',
            codeUrl: 'https://github.com/username/ecommerce'
        },
        {
            id: 'taskmanagement',
            title: t.projects.taskManagement.title,
            fullDescription: t.projects.taskManagement.fullDescription,
            tech: ['Vue.js', 'Firebase', 'Tailwind'],
            thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
                'https://images.unsplash.com/photo-1544197807-bb503430e35d?w=800&h=500&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
            ],
            demoUrl: 'https://example.com/task-demo',
            codeUrl: 'https://github.com/username/taskmanagement'
        },
        {
            id: 'portfolio',
            title: t.projects.portfolio.title,
            fullDescription: t.projects.portfolio.fullDescription,
            tech: ['React', 'CSS3', 'JavaScript'],
            thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
                'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=500&fit=crop'
            ],
            demoUrl: 'https://example.com/portfolio-demo',
            codeUrl: 'https://github.com/username/portfolio'
        }
    ];

    const project = projects.find(p => p.id === id);

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
                            className="w-full h-96 object-cover rounded-lg shadow-xl mb-4"
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