import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background aura */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 right-1/2 h-72 w-[48rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-72 w-[48rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="border-t border-white/10 py-10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} AegisGuard Security, Inc.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
