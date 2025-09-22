import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';

const NotFound = () => {
    const { t } = useLanguage();
        
    const t404 = {
        en: {
            title: "Oops! Page Not Found",
            subtitle: "The page you're looking for doesn't exist or has been moved.",
            description: "It seems like you've wandered into the digital wilderness. Don't worry, we can get you back on track!",
            home: "Go Home",
            contact: "Get In Touch",
            errorCode: "404",
            funnyMessage: "Maybe the page is hiding from me too! 😅"
        },
        id: {
            title: "Ups! Halaman Tidak Ditemukan",
            subtitle: "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
            description: "Sepertinya Anda tersesat di dunia digital. Jangan khawatir, kita bisa mengembalikan Anda ke jalur yang benar!",
            home: "Kembali ke Beranda",
            contact: "Hubungi Saya",
            errorCode: "404",
            funnyMessage: "Mungkin halaman itu juga sembunyi dari saya! 😅"
        },
        zh: {
            title: "哎呀！页面未找到",
            subtitle: "您要查找的页面不存在或已被移动。",
            description: "看起来您迷失在了数字荒野中。别担心，我们可以让您回到正轨！",
            home: "返回首页",
            contact: "联系我",
            errorCode: "404",
            funnyMessage: "也许这个页面也躲着我呢！😅"
        }
    };

    const currentLang = t.currentLanguage || 'en';
    const messages = t404[currentLang];

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 text-white">
            {/* Background geometric shapes */}
            <div className="absolute top-20 right-20 w-64 h-64 border border-red-500/20 rotate-45 hidden lg:block"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 border border-red-500/30 rotate-12 hidden lg:block"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-red-500/10 rotate-45 hidden lg:block"></div>

            <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
                <div className="space-y-8">
                    {/* Error Code */}
                    <div className="relative">
                        <div className="inline-block">
                            <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent mb-4">
                                {messages.errorCode}
                            </div>
                            <div className="w-full h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto"></div>
                        </div>
                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 max-w-2xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white">
                            {messages.title}
                        </h1>
                        <p className="text-xl text-gray-300">
                            {messages.subtitle}
                        </p>

                        {/* Funny Message */}
                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                            <p className="text-gray-400 italic text-lg">
                                "{messages.funnyMessage}"
                            </p>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            {messages.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Link
                                to="/"
                                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors text-center w-full sm:w-auto shadow-lg hover:shadow-green-500/25"
                            >
                                {messages.home}
                            </Link>
                            <Link
                                to="/about"
                                className="border border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 rounded-lg font-semibold transition-colors text-center w-full sm:w-auto"
                            >
                                {messages.contact}
                            </Link>
                        </div>
                    </div>

                    {/* Animated Error Illustration */}
                    <div className="relative max-w-md mx-auto">
                        <div className="animate-bounce">
                            <div className="w-24 h-24 bg-red-500/20 rounded-full mx-auto mb-4"></div>
                            <div className="text-6xl">🤔</div>
                        </div>
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500/30 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 pt-8">
                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors p-2 group">
                            <GithubIcon />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors p-2 group">
                            <LinkedinIcon />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-400 transition-colors p-2 group">
                            <MailIcon />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>

                    {/* Debug Info (Development Only) */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="text-xs text-gray-500 mt-8 p-3 bg-gray-800 rounded border border-gray-700">
                            <p>Current URL: {window.location.href}</p>
                            <p>Language: {currentLang}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-10 delay-500"></div>
                <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-30 delay-1000"></div>
            </div>
        </div>
    );
};

export default NotFound;