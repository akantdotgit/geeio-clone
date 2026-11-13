import { useParams, Navigate } from 'react-router-dom';
import { ARTICLES } from '../data/articlesData';
import { ArticleLayout } from '../components/templates';
import { Navbar, Footer } from '../components/layout';
import { CtaBanner } from '../components/sections';

/**
 * Article — Individual editorial article detail page
 *
 * Reads :slug from URL params and matches against src/data/articlesData.js.
 * Passes matched object as `article` to ArticleLayout.
 * Redirects to /404 if no match is found.
 */
export default function Article() {
  const { slug } = useParams();
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-canvas font-heading">
      <Navbar activePage="Blog" />
      <main>
        <ArticleLayout article={article} />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
