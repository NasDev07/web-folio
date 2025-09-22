import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const t = translations[currentLanguage];

    return (
        <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);