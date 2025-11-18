import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/10 to-transparent p-8 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.2),transparent_40%)]" />
          <div className="relative">
            <h3 className="text-white text-2xl md:text-4xl font-semibold">Ready to secure your stack?</h3>
            <p className="text-slate-200/90 mt-2 max-w-2xl">Launch in minutes with our guided setup. Connect your cloud, identity provider, and endpoints—then let our AI do the heavy lifting.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition">Create free account</a>
              <a href="#" className="inline-flex justify-center items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/5 transition">Book a demo</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
