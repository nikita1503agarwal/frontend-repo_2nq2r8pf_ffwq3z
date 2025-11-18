import { ShieldCheck, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center shadow-[0_0_40px_0_rgba(16,185,129,0.35)]">
            <ShieldCheck className="text-emerald-400" size={22} />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">
            AegisGuard
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-slate-300 hover:text-white transition">Sign in</a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400 transition shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)]"
          >
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
            <a href="#features" className="block text-slate-200">Features</a>
            <a href="#pricing" className="block text-slate-200">Pricing</a>
            <a href="#faq" className="block text-slate-200">FAQ</a>
            <div className="pt-2 flex gap-3">
              <a href="#" className="text-slate-300">Sign in</a>
              <a href="#cta" className="inline-flex rounded-lg bg-emerald-500 px-3 py-1.5 text-slate-900 font-medium">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
