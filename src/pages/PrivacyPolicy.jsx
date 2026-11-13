import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';
import { Button } from '../components/ui';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-canvas font-heading flex flex-col justify-between">
      <Navbar activePage="Privacy Policy" />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-xl mx-auto bg-surface rounded-3xl p-10 sm:p-14 border border-neutral-2/40">
          <span className="font-ui text-xs font-semibold text-accent uppercase tracking-widest mb-3 block">
            Geeio Legal
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-1.5px] text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="font-heading text-body text-base sm:text-lg mb-8 leading-relaxed">
            Coming soon. Full details on our data protection, privacy terms, and security standards.
          </p>
          <Button as={Link} to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
