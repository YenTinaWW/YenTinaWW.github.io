import React from 'react';
import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Blog from './pages/Blog';
import { LanguageProvider } from './context/LanguageContext';

// A wrapper component that intercepts the /:lang param and provides it to context
const LanguageRouter = () => {
  const { lang } = useParams();
  
  // If the language parameter is invalid, fallback
  if (lang !== 'en' && lang !== 'zh') {
    return <Navigate to="/zh" replace />;
  }

  return (
    <LanguageProvider urlLang={lang}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="blog" element={<Blog />} />
            {/* Catch missing nested routes and bring them home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

function App() {
  const defaultLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
  
  return (
    <HashRouter>
      <Routes>
        {/* Main layout wrapper with URL param extraction */}
        <Route path="/:lang/*" element={<LanguageRouter />} />
        {/* Root redirect accesses navigator language directly */}
        <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />
        <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
