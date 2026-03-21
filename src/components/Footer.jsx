import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  
  const content = {
    en: { rights: "All rights reserved." },
    zh: { rights: "版權所有。" }
  };

  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
      <div className="container">
        <h2 className="text-gradient" style={{ margin: '0 0 1rem 0', fontFamily: 'Outfit', fontWeight: 700 }}>YW</h2>
        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
          &copy; {year} Yen-Ting Wang. {content[lang].rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
