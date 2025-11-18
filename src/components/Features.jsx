import { motion } from 'framer-motion';
import { Shield, Lock, Network, Cpu } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Threat Detection',
    desc: 'Continuous monitoring powered by behavioral analytics and ML models.'
  },
  {
    icon: Lock,
    title: 'Identity & Access',
    desc: 'Fine-grained controls, SSO, and adaptive MFA across your stack.'
  },
  {
    icon: Network,
    title: 'Zero Trust Network',
    desc: 'Segmented, policy-driven access that limits blast radius by default.'
  },
  {
    icon: Cpu,
    title: 'AI Insights',
    desc: 'Explainable detections, root-cause timelines, and automated playbooks.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl font-semibold text-white"
        >
          Everything you need to secure your company
        </motion.h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-emerald-400/30 hover:shadow-[0_0_40px_0_rgba(16,185,129,0.25)] transition"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center mb-4">
                <item.icon className="text-emerald-400" />
              </div>
              <h3 className="text-white font-medium text-lg">{item.title}</h3>
              <p className="text-slate-300/80 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
