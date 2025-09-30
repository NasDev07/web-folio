import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h1 
                        className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 text-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t.blog.title}
                    </motion.h1>
                    <p className="text-xl text-gray-300 mb-12 text-center">{t.blog.subtitle}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.blog.posts.map((post, index) => (
                            <motion.article 
                                key={post.id}
                                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer overflow-hidden"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <Link
                                to={`/blog/${post.id}`} 
                                className="h2 text-2xl font-semibold text-white mb-4 hover:text-green-400 transition-colors line-clamp-2">
                                    {post.title}
                                </Link>
                                <p className="text-gray-300 text-base leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link 
                                    to={`/blog/${post.id}`} 
                                    className="mt-4 inline-block text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                                >
                                    {t.blog.readMore} <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;