import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();
  
  const content = {
    en: {
      titlePrefix: "Get In",
      titleSuffix: "Touch",
      description: "I am actively seeking full-time opportunities where I can contribute my skills in UI/UX, AI, and frontend development. Whether you have an open role or just want to connect, feel free to reach out.",
      emailMe: "Email Me",
      socialMedia: "Social Media"
    },
    zh: {
      titlePrefix: "保持",
      titleSuffix: "聯繫",
      description: "我目前正在積極尋求前端開發與 AI 相關的正職工作機會。如果您有合適的職缺，或是單純想交流交流，都非常歡迎隨時與我聯絡！",
      emailMe: "寄信給我",
      socialMedia: "社群網站"
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container flex-center" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
          {content[lang].titlePrefix} <span className="text-gradient">{content[lang].titleSuffix}</span>
        </h2>
        <p className="text-secondary" style={{ maxWidth: '600px', marginBottom: '3rem', fontSize: '1.2rem' }}>
          {content[lang].description}
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="glass-card contact-card" style={{ gap: '1.5rem', flex: '1 1 300px', maxWidth: '400px' }}>
            <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(30, 58, 138, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
              <Mail size={28} />
            </div>
            <div className="contact-card-content" style={{ gap: '0.3rem' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{content[lang].emailMe}</h3>
              <a href="mailto:tinawang0202@gmail.com" className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                tinawang0202@gmail.com <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="glass-card contact-card" style={{ gap: '1.5rem', flex: '1 1 300px', maxWidth: '400px' }}>
            <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(62, 39, 35, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
              <MessageSquare size={28} />
            </div>
            <div className="contact-card-content" style={{ gap: '0.3rem' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{content[lang].socialMedia}</h3>
              <a href="https://www.linkedin.com/in/yentina-wang/" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                LinkedIn <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
