import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import { Content } from './content/Content';

// Lazy Loaded Components
const Services = lazy(() => import('./components/home/Services'));
const Health = lazy(() => import('./components/home/Health'));
const Schedule = lazy(() => import('./components/home/Schedule'));
const Pricing = lazy(() => import('./components/home/Pricing'));
const BMI = lazy(() => import('./components/home/BMI'));
const Testimonial = lazy(() => import('./components/home/Testimonial'));
const Brand = lazy(() => import('./components/home/Brand'));
const Footer = lazy(() => import('./components/common/Footer'));

import FeatureStrip from './components/home/FeatureStrip';

const App: React.FC = () => {
  // Inicialização de Tema e SEO
  useEffect(() => {
    // Aplicar Cores CSS Global
    const root = document.documentElement;
    root.style.setProperty('--primary-color', Content.theme.colors.primary);
    root.style.setProperty('--secondary-color', Content.theme.colors.secondary);
    root.style.setProperty('--bg-dark', Content.theme.colors.background);
    root.style.setProperty('--bg-card', Content.theme.colors.cardBackground);
    root.style.setProperty('--text-color', Content.theme.colors.text);
    root.style.setProperty('--text-muted', Content.theme.colors.textMuted);

    // Aplicar SEO Básico
    document.title = Content.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', Content.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = Content.seo.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Navbar />
      {Content.hero.enabled && <Hero />}
      <FeatureStrip />
      <Suspense fallback={null}>
        {Content.services.enabled && <Services />}
        {Content.health.enabled && <Health />}
        {Content.schedule.enabled && <Schedule />}
        {Content.pricing.enabled && <Pricing />}
        {Content.bmi.enabled && <BMI />}
        {Content.testimonials.enabled && <Testimonial />}
        {Content.brands.enabled && <Brand />}
        {Content.footer.enabled && <Footer />}
      </Suspense>
    </>
  );
};

export default App;
