import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    return (
        <div className="flex space-x-2 ml-4">
            <button
                onClick={() => setCurrentLanguage('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${currentLanguage === 'en'
                        ? 'bg-green-500 text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setCurrentLanguage('id')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${currentLanguage === 'id'
                        ? 'bg-green-500 text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
            >
                ID
            </button>
            <button
                onClick={() => setCurrentLanguage('zh')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${currentLanguage === 'zh'
                        ? 'bg-green-500 text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
            >
                简
            </button>
        </div>
    );
};

export default LanguageSwitcher;