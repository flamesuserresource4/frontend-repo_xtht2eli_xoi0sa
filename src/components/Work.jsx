import { motion } from 'framer-motion'

const projects = [
  {
    tag: 'E-commerce',
    title: '40% ROAS Lift in 60 Days',
    desc: 'Scaled paid social and CRO for a DTC brand with creative testing and optimized funnels.',
  },
  {
    tag: 'SaaS',
    title: '3x Pipeline Growth',
    desc: 'Built an integrated demand gen engine across search, content, and partner channels.',
  },
  {
    tag: 'Fintech',
    title: 'CAC Down 35%',
    desc: 'Attribution overhaul and full-funnel optimization to drive efficient growth.',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected results</h2>
          <p className="mt-3 text-white/70">A snapshot of outcomes weve driven for ambitious teams.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all"
            >
              <span className="inline-flex items-center text-xs uppercase tracking-wide text-orange-400 bg-orange-400/10 px-2 py-1 rounded">
                {p.tag}
              </span>
              <h3 className="mt-3 text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
