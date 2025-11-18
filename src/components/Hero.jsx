import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Glow grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Spline 3D scene */}
      <div className="relative h-[70vh] md:h-[78vh]">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Top vignette + glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />

        {/* Tagline */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center px-6"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_40px_0_rgba(16,185,129,0.3)]">Zero-Trust • AI-Powered • SOC-Ready</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Cybersecurity you can trust.
              <span className="block text-emerald-400">Compliance you can prove.</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-slate-300/90">
              AegisGuard is a modern security platform that detects, protects, and reports in real-time so your team can sleep at night.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition shadow-[0_15px_50px_-12px_rgba(16,185,129,0.7)]">Start free</a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition">See features</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
