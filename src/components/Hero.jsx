import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();
  
  const content = {
    en: {
      hello: "Hello, I'm",
      name: "Tina Wang",
      description: "I build modern, engaging user experiences and robust web applications. Passionate about transforming ideas into elegant, responsive digital products.",
      viewWork: "View Work",
      letsTalk: "Let's Talk"
    },
    zh: {
      hello: "你好，我是",
      name: "王彥婷",
      description: "我專注於打造現代化、流暢的使用者體驗與強大的網頁應用程式。熱衷於將各種想法轉化為優雅且具響應式的數位產品。",
      viewWork: "查看作品",
      letsTalk: "聯絡我"
    }
  };

  return (
    <section id="home" className="section flex-center hero-padding" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }} className="animate-fade-in">
          <h1 className="heading-xl" style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
              {content[lang].hello}
            </span>
            <span className="text-gradient" style={{ fontWeight: 700 }}>
              {content[lang].name}
            </span>
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
            {content[lang].description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              {content[lang].viewWork} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ display: 'flex', gap: '0.8rem' }}>
              <Mail size={20} /> {content[lang].letsTalk}
            </a>
          </div>
          
          <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/YenTinaWW" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ transition: 'color var(--transition-fast)' }}>
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ transition: 'color var(--transition-fast)' }}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
