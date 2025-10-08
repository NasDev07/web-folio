import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { usePerformanceMonitoring } from './utils/seoUtils';

// Lazy load components untuk performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]" role="status" aria-label="Loading content">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

const App = () => {
  // Monitor performance metrics
  usePerformanceMonitoring();

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="bg-gray-900 min-h-screen text-white">
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            <Navbar />
            
            <main id="main-content" className="pt-16" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;