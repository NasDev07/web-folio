import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-8">{t.about.title}</h1>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {t.about.description1}
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {t.about.description2}
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-green-400">{t.about.skills}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">{t.about.react}</span>
                                            <span className="text-green-400">{t.about.reactLevel}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[90%]"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">{t.about.javascript}</span>
                                            <span className="text-green-400">{t.about.jsLevel}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">{t.about.uiux}</span>
                                            <span className="text-green-400">{t.about.uiuxLevel}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[88%]"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">{t.about.nodejs}</span>
                                            <span className="text-green-400">{t.about.nodeLevel}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[75%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-full h-96 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop"
                                    alt="Working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;