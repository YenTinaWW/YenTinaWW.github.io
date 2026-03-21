import React, { createContext, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ urlLang, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = urlLang === 'zh' ? 'en' : 'zh';
    // Replace the language prefix in the current pathname
    // e.g. /zh/projects -> /en/projects
    const currentPath = location.pathname;
    
    // Split the path to safely transition /en to /zh
    // Using string replace can be dangerous if there's a folder named /en,
    // so we specifically target the first segment.
    const segments = currentPath.split('/');
    if (segments[1] === urlLang) {
      segments[1] = newLang;
    }
    const newPath = segments.join('/');
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ lang: urlLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
