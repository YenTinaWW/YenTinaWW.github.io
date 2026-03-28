import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  
  const content = {
    en: { title: "All", subtitle: "Projects", filterAll: "All", code: "Code", live: "Website", appStore: "App Store" },
    zh: { title: "所有", subtitle: "作品", filterAll: "全部", code: "GitHub", live: "網站", appStore: "App Store" }
  };
  
  const categories = ['all', 'app dev', 'ai', 'design'];
  const projects = projectsData[lang];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="section container hero-padding" style={{ minHeight: '80vh' }}>
      <h1 className="heading-lg" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        {content[lang].title} <span className="text-gradient">{content[lang].subtitle}</span>
      </h1>
      
      <div className="flex-center" style={{ gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.5rem 1.5rem', borderRadius: '30px' }}
          >
            {cat === 'all' ? content[lang].filterAll : cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2.5rem' }}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-card flex-between" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
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
                  <span key={tag} style={{ padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: 'var(--text-secondary)', border: '1px solid rgba(0,0,0,0.05)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem', flex: 1, minWidth: '120px', justifyContent: 'center', borderRadius: '30px' }}>
                  <Github size={18} style={{ marginRight: '0.5rem' }}/> {content[lang].code}
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem', flex: 1, minWidth: '120px', justifyContent: 'center', borderRadius: '30px' }}>
                  <ExternalLink size={18} style={{ marginRight: '0.5rem' }}/> {content[lang].live}
                </a>
              )}
              {project.appStore && (
                <a href={project.appStore} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem', flex: 1, minWidth: '120px', justifyContent: 'center', borderRadius: '30px' }}>
                  <ExternalLink size={18} style={{ marginRight: '0.5rem' }}/> {content[lang].appStore}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
