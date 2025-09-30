import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const BlogDetail = () => {
    const { id } = useParams();
    const { t } = useLanguage();

    const post = t.blog.posts.find(p => p.id === id);

    if (!post) {
        return <div>Blog post not found</div>;
    }

    return (
        <motion.div 
            className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">&larr; Back to Blog</Link>
                    <motion.h1 
                        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {post.title}
                    </motion.h1>
                    <div className="mb-6 overflow-hidden rounded-xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-6">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <div className="prose prose-invert max-w-none text-gray-300">
                        <p className="text-lg leading-relaxed mb-6">{post.content}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogDetail;