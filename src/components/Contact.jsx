import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();
  
  const content = {
    en: {
      titlePrefix: "Let's",
      titleSuffix: "Work Together",
      description: "I'm currently available for freelance work and open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out.",
      emailMe: "Email Me",
      socialMedia: "Social Media"
    },
    zh: {
      titlePrefix: "預約",
      titleSuffix: "合作提案",
      description: "我目前有空承接接案工作，並開放任何新的合作機會。無論您有任何專案想法，或是單純想交流，都歡迎隨時聯絡我。",
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
          <div className="glass-card flex-center" style={{ flexDirection: 'column', gap: '1rem', flex: '1 1 250px', maxWidth: '350px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(30, 58, 138, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
              <Mail size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem' }}>{content[lang].emailMe}</h3>
            <a href="mailto:hello@example.com" className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              hello@example.com <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="glass-card flex-center" style={{ flexDirection: 'column', gap: '1rem', flex: '1 1 250px', maxWidth: '350px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(62, 39, 35, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
              <MessageSquare size={28} />
            </div>
            <h3 style={{ fontSize: '1.2rem' }}>{content[lang].socialMedia}</h3>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              LinkedIn <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
