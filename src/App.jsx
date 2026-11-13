import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Home,
  Features,
  Pricing,
  Contact,
  AboutUs,
  BlogPage,
  Article,
  Downloads,
  PrivacyPolicy,
  TermsAndConditions,
  Changelog,
  License,
  NotFound,
} from './pages';

/**
 * ScrollToTop — Automatically scrolls window to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/license" element={<License />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
