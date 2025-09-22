import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Blog = () => {
    const { t, currentLanguage } = useLanguage();

    const blogPosts = [
        {
            title: t.blog.post1.title,
            excerpt: t.blog.post1.excerpt,
            date: currentLanguage === 'id' ? '15 Sep 2024' : t.blog.post1.date,
            readTime: currentLanguage === 'id' ? '5 menit baca' : t.blog.post1.readTime
        },
        {
            title: t.blog.post2.title,
            excerpt: t.blog.post2.excerpt,
            date: currentLanguage === 'id' ? '10 Sep 2024' : t.blog.post2.date,
            readTime: currentLanguage === 'id' ? '8 menit baca' : t.blog.post2.readTime
        },
        {
            title: t.blog.post3.title,
            excerpt: t.blog.post3.excerpt,
            date: currentLanguage === 'id' ? '5 Sep 2024' : t.blog.post3.date,
            readTime: currentLanguage === 'id' ? '6 menit baca' : t.blog.post3.readTime
        }
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-8">{t.blog.title}</h1>
                    <p className="text-xl text-gray-300 mb-12">{t.blog.subtitle}</p>

                    <div className="space-y-8">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors cursor-pointer">
                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-semibold text-white mb-4 hover:text-green-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <button className="text-green-400 hover:text-green-300 transition-colors mt-4 inline-flex items-center">
                                    {t.blog.readMore} →
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;