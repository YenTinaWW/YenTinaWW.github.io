import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: { home: 'Home', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
    zh: { home: '首頁', projects: '作品集', blog: '部落格', contact: '聯絡我' }
  };

  return (
    <header className={`header ${scrolled ? 'glass' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container flex-between">
        <Link to={`/${lang}`} className="logo">
          <h2 className="text-gradient" style={{ margin: 0 }}>YW</h2>
        </Link>
        <nav className="header-nav">
          <ul className="header-links">
            <li><Link to={`/${lang}`} style={{ color: location.pathname === `/${lang}` ? 'var(--accent-secondary)' : 'inherit' }}>{content[lang].home}</Link></li>
            <li><Link to={`/${lang}/projects`} style={{ color: location.pathname.includes('/projects') ? 'var(--accent-secondary)' : 'inherit' }}>{content[lang].projects}</Link></li>
            <li><Link to={`/${lang}/blog`} style={{ color: location.pathname.includes('/blog') ? 'var(--accent-secondary)' : 'inherit' }}>{content[lang].blog}</Link></li>
          </ul>
          <button 
            onClick={toggleLanguage} 
            className="flex-center lang-toggle" 
          >
            <Globe size={16} />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
