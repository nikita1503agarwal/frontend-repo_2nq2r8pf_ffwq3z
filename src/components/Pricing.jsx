import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'For small teams getting started',
    features: ['Up to 5 agents', 'Community support', 'Basic analytics']
  },
  {
    name: 'Pro',
    price: '$49',
    tagline: 'Best for growing companies',
    features: ['Unlimited agents', 'AI detections', 'Compliance reports', 'Email support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Advanced needs & dedicated support',
    features: ['SAML/SSO', 'Custom SLAs', 'Dedicated CSM', 'On-prem options']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl font-semibold text-white"
        >
          Simple, transparent pricing
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border bg-gradient-to-b p-6 ${
                tier.highlight
                  ? 'border-emerald-400/50 from-emerald-500/15 to-transparent shadow-[0_0_50px_-10px_rgba(16,185,129,0.6)]'
                  : 'border-white/10 from-white/5 to-transparent'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium text-xl">{tier.name}</h3>
                {tier.highlight && (
                  <span className="text-xs text-emerald-300 border border-emerald-400/40 bg-emerald-400/10 rounded-full px-2 py-0.5">Popular</span>
                )}
              </div>
              <p className="text-slate-300/80 text-sm mt-1">{tier.tagline}</p>
              <div className="text-4xl text-white font-semibold mt-6">{tier.price}<span className="text-base text-slate-400 font-normal">/mo</span></div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-slate-300/90 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 inline-flex justify-center w-full rounded-xl px-5 py-3 font-medium transition ${
                tier.highlight
                  ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400'
                  : 'border border-white/15 text-white/90 hover:bg-white/5'
              }`}>Choose {tier.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
