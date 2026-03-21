import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { blogData } from '../data/blog';
import { ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const { lang } = useLanguage();
  const posts = blogData[lang];

  const content = {
    en: { title: "Technical", subtitle: "Notes & Learning", readMore: "Read Article" },
    zh: { title: "技術筆記", subtitle: "與學習心得", readMore: "閱讀文章" }
  };

  return (
    <section className="section container hero-padding" style={{ minHeight: '80vh' }}>
      <h1 className="heading-lg" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        {content[lang].title} <span className="text-gradient">{content[lang].subtitle}</span>
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {posts.map(post => (
          <article key={post.id} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
              <span>{post.date}</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {post.readTime}</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: '0.5rem 0', fontFamily: 'Noto Serif TC' }}>{post.title}</h2>
            <p className="text-secondary" style={{ lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
              {post.summary}
            </p>
            <a href="#" className="text-secondary" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, transition: 'color var(--transition-fast)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              {content[lang].readMore} <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
