import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { lang } = useLanguage();
  
  const content = {
    en: {
      titlePrefix: "Featured",
      titleSuffix: "Projects",
      code: "Code",
      live: "Website",
      viewAll: "View All Projects",
      appStore: "App Store"
    },
    zh: {
      titlePrefix: "精選",
      titleSuffix: "作品",
      code: "GitHub",
      live: "網站",
      viewAll: "查看所有專案",
      appStore: "App Store"
    }
  };

  const featuredProjects = projectsData[lang].filter(p => p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          <h2 className="heading-lg" style={{ margin: 0 }}>
            {content[lang].titlePrefix} <span className="text-gradient">{content[lang].titleSuffix}</span>
          </h2>
          <Link to={`/${lang}/projects`} className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 1.5rem', borderRadius: '30px', flexShrink: 0 }}>
            {content[lang].viewAll} <ArrowRight size={18} />
          </Link>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem'
        }}>
          {featuredProjects.map((project) => (
            <div key={project.id} className="glass-card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start', minHeight: '320px' }}>
              <div style={{ width: '100%' }}>
                <div className="flex-between" style={{ marginBottom: '1rem' }}>
                   <h3 style={{ fontSize: '1.4rem' }}>{project.title}</h3>
                   <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-secondary)' }}>{project.category}</span>
                </div>
                <p className="text-secondary" style={{ marginBottom: '1.5rem', minHeight: '80px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.03)',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', flex: 1, minWidth: '120px', justifyContent: 'center', borderRadius: '30px' }}>
                    <Github size={18} style={{ marginRight: '0.5rem' }} /> {content[lang].code}
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', flex: 1, minWidth: '120px', justifyContent: 'center', borderRadius: '30px' }}>
                    <ExternalLink size={18} style={{ marginRight: '0.5rem' }} /> {content[lang].live}
                  </a>
                )}
                {project.appStore && (
                  <a href={project.appStore} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', flex: 1, minWidth: '120px', justifyContent: 'center', borderRadius: '30px' }}>
                    <ExternalLink size={18} style={{ marginRight: '0.5rem' }} /> {content[lang].appStore}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
