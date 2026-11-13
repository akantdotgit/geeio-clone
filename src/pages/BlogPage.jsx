import { Navbar, Footer } from '../components/layout';
import { Blog, CtaBanner } from '../components/sections';

/**
 * BlogPage — Full editorial articles listing page
 *
 * Distinct from the standalone src/components/sections/Blog.jsx section.
 * Renders Navbar, Blog section, CtaBanner, and Footer.
 */
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-canvas font-heading flex flex-col justify-between">
      <Navbar activePage="Blog" />
      <main className="flex-1">
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
